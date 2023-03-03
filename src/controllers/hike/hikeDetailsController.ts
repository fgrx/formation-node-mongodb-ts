import { Request, Response } from "express";
import { hikeRepository } from "../../repository/hikeRepository";

const hikeDetailsController = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const hike = await hikeRepository.GetHikeBySlug(slug);
  res.render("hikeDetails", { hike });
};

export { hikeDetailsController };
