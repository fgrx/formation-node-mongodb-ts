import { Router } from "express";
import {
  hikeDetailsController,
  hikesSearchController,
  hikesDisplayController,
  hikeAddController,
} from "../controllers/hike";
import upload from "../middlewares/upload";

const hikeRoutes = (router: Router) => {
  router.get("/randonnees", hikesDisplayController);
  router.get("/randonnees/ajout", hikeAddController.displayForm);
  router.post(
    "/randonnees/ajout",
    upload.single("image"),
    hikeAddController.validateForm
  );
  router.get("/randonnees/page/:page", hikesDisplayController);
  router.get("/randonnee/:slug", hikeDetailsController);
  router.post("/search", hikesSearchController);

  return router;
};

export { hikeRoutes };
