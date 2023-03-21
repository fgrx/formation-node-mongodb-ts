import { Router } from "express";
import { searchQueryBuilder } from "../../../../controllers/hike/hikesSearchController";
import { HikeDifficulty } from "../../../../interfaces/Hike";
import { hikeRepository } from "../../../../repository/hikeRepository";
import { hikeSearchSchema } from "../../../../schemas/hikeSearchSchema";

const searchHikes = (baseUrl: string): Router => {
  const router = Router();

  router.get(`${baseUrl}/search`, async (req, res) => {
    const { distanceMax, distanceMin, difficulty, isLoop } = req.query;

    const query = searchQueryBuilder({
      distanceMin: Number(distanceMin),
      distanceMax: Number(distanceMax),
      isLoop: isLoop ? true : false,
      difficulty: difficulty as HikeDifficulty,
    });

    const { error } = hikeSearchSchema.validate(query);

    if (!error) {
      const results = await hikeRepository.searchHikes(query);
      res.json(results);
    } else {
      res.status(400).json({ message: "Requête mal formée", error });
    }
  });

  return router;
};

export default searchHikes;
