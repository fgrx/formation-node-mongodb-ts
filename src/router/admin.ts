import { Router } from "express";
import {
  displayHikeManagementConsole,
  hikeDeletion,
  hikeValidation,
} from "../controllers/admin";

const adminRoutes = (router: Router): Router => {
  router.get("/admin", displayHikeManagementConsole);
  router.get("/admin/delete/:slug", hikeDeletion);
  router.get("/admin/valid/:slug", hikeValidation);

  return router;
};

export { adminRoutes };
