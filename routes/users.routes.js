import { Router } from "express";
// import { jwtMiddleware } from "../middleware/jwt.middleware.js";
import { UserController } from "../controllers/user.controller.js";

const initUsersRoutes = (app) => {
  const router = Router();
  router.post("/signUp", UserController.signUp);
  router.post("/signIn", UserController.signIn);

  app.use("/users", router);
};

export default initUsersRoutes;
