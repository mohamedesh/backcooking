import User from "../models/User.js";
import bcrypt from "bcrypt";

const createUser = async (
  surname,
  name,
  email,
  password,
  deliveryAdress,
  number
) => {
  const passwordUser = await bcrypt.hash(password, 10);
  try {
    const user = User.create({
      surname,
      name,
      email,
      password: passwordUser,
      deliveryAdress,
      number,
    });
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const connectUser = async (email) => {
  try {
    const user = User.findOne({ where: { email: email } });
    return user;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const UserDao = {
  createUser,
  connectUser,
};
