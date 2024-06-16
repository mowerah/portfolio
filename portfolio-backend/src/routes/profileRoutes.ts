import { Router } from "express";
import {
  createProfile,
  getProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Create a new profile
 *     tags: [Profiles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       201:
 *         description: The profile was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       500:
 *         description: Some server error
 */
router.post("/profiles", authMiddleware, createProfile);

/**
 * @swagger
 * /profiles:
 *   get:
 *     summary: Returns the list of all the profiles
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: The list of the profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 *       500:
 *         description: Some server error
 */
router.get("/profiles", authMiddleware, getProfiles);


/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Get the profile by id
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile id
 *     responses:
 *       200:
 *         description: The profile description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: The profile was not found
 *       500:
 *         description: Some server error
 */
router.get("/profiles/:id", authMiddleware, getProfileById);

/**
 * @swagger
 * /profiles/{id}:
 *   put:
 *     summary: Update the profile by the id
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       200:
 *         description: The profile was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: The profile was not found
 *       500:
 *         description: Some server error
 */
router.put("/profiles/:id", authMiddleware, updateProfile);

/**
 * @swagger
 * /profiles/{id}:
 *   delete:
 *     summary: Remove the profile by id
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The profile id
 *     responses:
 *       204:
 *         description: The profile was deleted
 *       404:
 *         description: The profile was not found
 *       500:
 *         description: Some server error
 */
router.delete("/profiles/:id", authMiddleware, deleteProfile);

export default router;
