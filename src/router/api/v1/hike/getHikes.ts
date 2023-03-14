import { Router } from "express";
import { hikeRepository } from "../../../../repository/hikeRepository";

const getHikes = (router: Router, baseUrl: string) => {
  router.get(`${baseUrl}/hikes`, async (req, res) => {
    const start = parseInt(req.query.start as string) || 0;
    const limit = parseInt(req.query.limit as string) || 20;

    const hikes = await hikeRepository.getHikes(start, limit);

    res.json(hikes);
  });
};

export default getHikes;
