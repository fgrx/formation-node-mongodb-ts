import { Router } from "express";
import getHikes from "./hike/getHikes";

const apiV1 = (router: Router) => {
  const baseUrl = "/api/v1";

  router.get(baseUrl, (req, res) => {
    res.json("Bienvenue ! 🙌");
  });

  getHikes(router, baseUrl);

  return router;
};

export { apiV1 };
