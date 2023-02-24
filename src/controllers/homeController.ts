import { Request, Response } from "express";
import { hikeRepository } from "../repository/hikeRepository";

const homeController = (req: Request, res: Response) => {
  const numberOfHikesToShow = 6;
  const hikes = hikeRepository.getHikes(0, numberOfHikesToShow);
  res.render("index", { hikes });
};

export { homeController };
