import { Router } from "express";
import { body } from "express-validator";
import { register, login } from "../controllers/userController";

const router = Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation errors
 *       500:
 *         description: Some server error
 */
router.post(
  "/register",
  [
    body("username", "Please include a valid username").notEmpty(),
    body(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  register
);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login and get JWT token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authentication
 *       400:
 *         description: Validation errors
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Some server error
 */
router.post(
  "/login",
  [
    body("username", "Please include a valid username").notEmpty(),
    body("password", "Password is required").exists(),
  ],
  login
);

export default router;
