import { Request, Response } from "express";
import { hikeRepository } from "../repository/hikeRepository";

const homeController = async (req: Request, res: Response) => {
  const numberOfHikesToShow = 6;
  const hikes = await hikeRepository.getHikes(0, numberOfHikesToShow);
  res.render("index", { hikes });
};

export { homeController };
