import { Router } from "express";
import addHike from "./hike/addHike";
import getHikes from "./hike/getHikes";

const apiV1 = (): Router => {
  const router = Router();

  const baseUrl = "/api/v1";

  router.get(baseUrl, (req, res) => {
    res.json("Bienvenue ! 🙌");
  });

  router.use(getHikes(baseUrl));
  router.use(addHike(baseUrl));

  return router;
};

export { apiV1 };
