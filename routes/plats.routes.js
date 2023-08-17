import { Router } from "express";
import { jwtMiddleware } from "../middleware/jwt.middleware.js";
import { platController } from "../controllers/plat.controller.js";

const initPlatsRoutes = (app) => {
  const router = Router();
  router.get("/displayAll", platController.allPlats);
  router.get("/display/:id", jwtMiddleware, platController.platByCategorie);
  router.post("/addPlat/:id", jwtMiddleware, platController.addPlats);

  app.use("/plats", router);
};

export default initPlatsRoutes;
