import { Request, Response } from "express";
import { hikeRepository } from "../../repository/hikeRepository";

const hikesSearchController = async (req: Request, res: Response) => {
  let query = {};

  const { distanceMin, distanceMax, difficulty, isLoop } = req.body;

  if (isLoop == "on") Object.assign(query, { isLoop: true });
  if (difficulty) Object.assign(query, { difficulty });

  if (distanceMin || distanceMax) {
    let distance: { $gte?: number; $lte?: number } = {};

    if (distanceMin) distance.$gte = distanceMin;
    if (distanceMax) distance.$lte = distanceMax;

    Object.assign(query, { distance });
  }

  const hikes = await hikeRepository.searchHikes(query);

  res.render("search", { hikes });
};

export { hikesSearchController };
