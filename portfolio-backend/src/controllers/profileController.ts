import { Request, Response } from "express";
import { Profile } from "../models/Profile";

export const createProfile = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error creating profile", error });
  }
};

export const getProfiles = async (_req: Request, res: Response) => {
  try {
    const profiles = await Profile.findAll();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving profiles", error });
  }
};

export const getProfileById = async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findByPk(req.params.id);
    if (profile) {
      res.status(200).json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving profile", error });
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const [updated] = await Profile.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedProfile = await Profile.findByPk(req.params.id);
      res.status(200).json(updatedProfile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const deleted = await Profile.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json({ message: "Profile deleted" });
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting profile", error });
  }
};
