import { Application, Router } from "express";
import { hikeDetailsController } from "../controllers/hikeDetailsController";
import { hikesController } from "../controllers/hikesController";
import { homeController } from "../controllers/homeController";
import { legalController } from "../controllers/legalController";
import { hikesSearchController } from "../controllers/hikesSearchController";
import { useRouteError } from "../middlewares/routeErrors";
import { addController } from "../controllers/hikeAddController";
import upload from "../middlewares/upload";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.post("/search", hikesSearchController);
  router.get("/mentions-legales", legalController);

  router.get("/randonnees", hikesController);
  router.get("/randonnees/ajout", addController.displayForm);
  router.post(
    "/randonnees/ajout",
    upload.single("image"),
    addController.validateForm
  );
  router.get("/randonnees/page/:page", hikesController);
  router.get("/randonnee/:slug", hikeDetailsController);

  app.use(router);

  useRouteError(app);
};

export { createRouter };
