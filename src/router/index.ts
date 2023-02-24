import { Application, Router } from "express";
import { homeController } from "../controllers/homeController";
import { legalController } from "../controllers/legalController";
import { useRouteError } from "../middlewares/routeErrors";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.get("/mentions-legales", legalController);

  app.use(router);

  useRouteError(app);
};

export { createRouter };
