import { Request, Response } from "express";
import { HikeDifficulty } from "../../interfaces/Hike";
import { hikeRepository } from "../../repository/hikeRepository";

interface searchParams {
  distanceMin?: number;
  distanceMax?: number;
  difficulty?: string | HikeDifficulty;
  isLoop?: string | boolean;
}

const searchQueryBuilder = (params: searchParams): object => {
  const { distanceMin, distanceMax, difficulty, isLoop } = params;

  let query = {};

  if (isLoop == "on" || isLoop) Object.assign(query, { isLoop: true });
  if (difficulty) Object.assign(query, { difficulty });

  if (distanceMin || distanceMax) {
    let distance: { $gte?: number; $lte?: number } = {};

    if (distanceMin) distance.$gte = distanceMin;
    if (distanceMax) distance.$lte = distanceMax;

    Object.assign(query, { distance });
  }

  return query;
};

const hikesSearchController = async (req: Request, res: Response) => {
  const params = req.body;

  const query = searchQueryBuilder(params);

  const hikes = await hikeRepository.searchHikes(query);

  res.render("search", { hikes });
};

export { hikesSearchController, searchQueryBuilder };
