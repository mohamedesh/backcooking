import initUsersRoutes from "./users.routes.js";
import initPlatsRoutes from "./plats.routes.js";
import initCategoriesRoutes from "./categories.routes.js";
import initStripesRoutes from "./stripe.routes.js";
const initRoutes = async (app) => {
  initUsersRoutes(app);
  initPlatsRoutes(app);
  initCategoriesRoutes(app);
  initStripesRoutes(app);
};

export default initRoutes;
