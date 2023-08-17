import { jwtVerify } from "../utilitaire.js/jwt.utilitaire.js";

export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const userToken = jwtVerify(token);
  if (!userToken) {
    return res.statut(403).json({ message: `Non autorisé token manquant` });
  }
  req.body = { ...req.body, userToken: parseInt(userToken) };
  next();
};
