import { Application, Router } from "express";
import { hikeDetailsController } from "../controllers/hikeDetailsController";
import { homeController } from "../controllers/homeController";
import { legalController } from "../controllers/legalController";
import { useRouteError } from "../middlewares/routeErrors";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.get("/mentions-legales", legalController);
  router.get("/randonnee/:slug", hikeDetailsController);

  app.use(router);

  useRouteError(app);
};

export { createRouter };
