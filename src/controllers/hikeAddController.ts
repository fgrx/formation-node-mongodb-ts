import { Request, Response } from "express";
import { Hike } from "../interfaces/Hike";
import slugify from "slugify";
import { hikeRepository } from "../repository/hikeRepository";

const addController = {
  displayForm: (req: Request, res: Response) => {
    res.render("hikeAddForm");
  },

  validateForm: async (req: Request, res: Response) => {
    const {
      title,
      duration,
      distance,
      postCode,
      start,
      difficulty,
      isLoop,
      description,
    } = req.body;

    const newHike: Hike = {
      slug: slugify(title),
      title,
      duration,
      distance,
      postCode,
      start,
      difficulty,
      isLoop: isLoop === "on",
      description,
    };

    const createdHike = await hikeRepository.addHike(newHike);

    res.render("hikeAddForm");
  },
};

export { addController };
