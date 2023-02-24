import { Request, Response } from "express";
import { hikeService } from "../repository/hikeRepository";

const homeController = (req: Request, res: Response) => {
  const numberOfHikesToShow = 6;
  const hikes = hikeService.getHikes(0, numberOfHikesToShow);
  res.render("index", { hikes });
};

export { homeController };
