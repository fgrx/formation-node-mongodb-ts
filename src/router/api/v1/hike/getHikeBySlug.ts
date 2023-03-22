import { Router } from "express";
import { hikeRepository } from "../../../../repository/hikeRepository";

const getHikes = (baseUrl: string): Router => {
  const router = Router();

  router.get(`${baseUrl}/hikes/:slug`, async (req, res) => {
    const { slug } = req.params;

    const hike = await hikeRepository.GetHikeBySlug(slug);

    if (hike) {
      res.json(hike);
    } else {
      res.status(404).json("Aucune randonnée trouvée");
    }
  });

  return router;
};

export default getHikes;
