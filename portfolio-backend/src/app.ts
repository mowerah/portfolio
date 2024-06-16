import express from "express";
import profileRoutes from "./routes/profileRoutes";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json()); // Body parser middleware
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use profile routes
app.use("/api/users", userRoutes);
app.use('/api', profileRoutes);

export default app;