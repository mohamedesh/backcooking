import connection from "../config/db.js";
import { DataTypes } from "sequelize";
import Plat from "./Plat.js";

const Commande = connection.db.define("Commande", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  deliveryDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  invoiceDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Commande.belongsTo(Plat, {
  foreignKey: {
    allowNull: false,
    name: "platId",
  },
  sourceKey: "id",
});

export default Commande;
