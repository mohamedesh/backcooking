import { UserDao } from "../daos/user.dao.js";
import { jwtSign } from "../utilitaire.js/jwt.utilitaire.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  const { surname, name, email, password, deliveryAdress, number } = req.body;
  const user = await UserDao.createUser(
    surname,
    name,
    email,
    password,
    deliveryAdress,
    number
  );
  //afficher l'erreur
  if (user.e) {
    res
      .status(403)
      .json({ message: `la création de l'user n'as pas pu être accompli` });
  }
  //crée un token
  const token = jwtSign(user.id);
  console.log(token);
  res.status(201).json({ message: `user crée`, user, token });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserDao.connectUser(email);
  const passWord = await bcrypt.compare(password, user.password);
  console.log("password", user.password);
  if (passWord) {
    const token = jwtSign(user.id);
    return res
      .status(200)
      .json({ message: "connection réussite", token, user });
  } else {
    return res.status(401).json({ message: `connection non aboutit` });
  }
};

export const UserController = {
  signUp,
  signIn,
};
