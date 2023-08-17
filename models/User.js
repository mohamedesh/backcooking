import connection from "../config/db.js";
import { DataTypes } from "sequelize";
import Commande from "./Commande.js";

const User = connection.db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        message: "email déjà attribuer à un autre utilisateur",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryAdress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createAt: `created`,
    updateAt: "updated",
  }
);

User.hasMany(Commande, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
  sourceKey: "id",
});

export default User;
