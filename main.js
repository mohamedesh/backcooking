import express from "express";
const app = express();
//configuration
import connection from "./config/db.js";

//models
import User from "./models/User.js";
import Plat from "./models/Plat.js";
import Commande from "./models/Commande.js";
import Categorie from "./models/Categorie.js";

//routes
import initRoutes from "./routes/router.js";

//middlewares
import initMiddlewares from "./middleware/init.js";

//port
const port = 3335;

// connection
try {
  console.log(`connection bdd`);
  initMiddlewares(app);
  await initRoutes(app);
  await connection.sync();
} catch (e) {
  console.error(e.message);
}

app.listen(port, () => {
  console.log(`serveur en cours dans le port ${port}`);
});
