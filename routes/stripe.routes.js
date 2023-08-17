import { Router } from "express";
import { stripeController } from "../controllers/stripe.controller.js";

const initStripesRoutes = (app) => {
  const router = Router();
  router.post("/create-checkout-session", stripeController.stripeGestion);
  app.use("/stripe", router);
};

export default initStripesRoutes;
