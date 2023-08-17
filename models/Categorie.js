import { DataTypes } from "sequelize";
import connection from "../config/db.js";
import Plat from "./Plat.js";

const Categorie = connection.db.define("Categorie", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Categorie.hasMany(Plat, {
  foreingKey: {
    allowNull: false,
    name: "categorieId",
  },
});
export default Categorie;
