import { Application, Router } from "express";
import { homeController } from "../controllers/homeController";
import { legalController } from "../controllers/legalController";
import { useRouteError } from "../middlewares/routeErrors";
import { adminRoutes } from "./admin";
import { authController } from "../controllers/authController";
import { hikeRoutes } from "./hike";

const createRouter = (app: Application) => {
  const router = Router();

  router.get("/", homeController);
  router.get("/mentions-legales", legalController);
  router.get("/login", authController.showLogin);
  router.post("/login", authController.controlCredentials);
  router.get("/logout", authController.logout);

  app.use(router);

  app.use(adminRoutes(router));
  app.use(hikeRoutes(router));

  useRouteError(app);
};

export { createRouter };
