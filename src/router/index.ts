import { Application, Router } from "express";
import { homeController } from "../controllers/homeController";
import { legalController } from "../controllers/legalController";
import { useRouteError } from "../middlewares/routeErrors";
import upload from "../middlewares/upload";
import { adminRoutes } from "./admin";
import { authController } from "../controllers/authController";
import {
  hikeDetailsController,
  hikesSearchController,
  hikesDisplayController,
  hikeAddController,
} from "../controllers/hike";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.post("/search", hikesSearchController);
  router.get("/mentions-legales", legalController);

  router.get("/randonnees", hikesDisplayController);
  router.get("/randonnees/ajout", hikeAddController.displayForm);
  router.post(
    "/randonnees/ajout",
    upload.single("image"),
    hikeAddController.validateForm
  );
  router.get("/randonnees/page/:page", hikesDisplayController);
  router.get("/randonnee/:slug", hikeDetailsController);
  router.get("/login", authController.showLogin);

  app.use(router);
  app.use(adminRoutes(router));

  useRouteError(app);
};

export { createRouter };
