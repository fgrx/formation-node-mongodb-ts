import { Application, Router } from "express";
import { hikeDetailsController } from "../controllers/hikeDetailsController";
import { hikesController } from "../controllers/hikesController";
import { homeController } from "../controllers/homeController";
import { legalController } from "../controllers/legalController";
import { hikesSearchController } from "../controllers/hikesSearchController";
import { useRouteError } from "../middlewares/routeErrors";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.get("/mentions-legales", legalController);
  router.get("/randonnee/:slug", hikeDetailsController);
  router.get("/randonnees", hikesController);
  router.get("/randonnees/:page", hikesController);
  router.post("/search", hikesSearchController);

  app.use(router);

  useRouteError(app);
};

export { createRouter };
