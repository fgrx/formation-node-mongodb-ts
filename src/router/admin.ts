import { Router } from "express";
import { routeGuard } from "../middlewares/routeGuard";

import {
  displayHikeManagementConsole,
  hikeDeletion,
  hikeValidation,
} from "../controllers/admin";

const adminRoutes = (): Router => {
  const router = Router();

  router.get("/admin", routeGuard, displayHikeManagementConsole);
  router.get("/admin/delete/:slug", routeGuard, hikeDeletion);
  router.get("/admin/valid/:slug", routeGuard, hikeValidation);

  return router;
};

export { adminRoutes };
