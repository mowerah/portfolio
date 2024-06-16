import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sequelize } from "../config/database";
import User from "../models/User";

interface UserPayload {
  user: {
    id: number;
  };
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if not token
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;

    // Fetch user from database
    const user = await User.findByPk(decoded.user.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Attach user object to request
    req.user = user;
    next();
  } catch (error: any) {
    console.error('Error:', error.message);
    res.status(401).json({ message: "Token is not valid" });
  }
};

declare global {
  namespace Express {
    interface Request {
      user?: InstanceType<typeof User>;
    }
  }
}
