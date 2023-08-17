import { stripeDao } from "../daos/stripe.dao.js";

const stripeGestion = async (req, res) => {
  const quant = parseInt(req.body.quantity);
  const idStripe = parseInt(req.body.id);
  const stripe = await stripeDao.payementStripe(quant, idStripe);
  if (!stripe) {
    res.status(400).json({ message: `payement non effectué` });
  }
  //   res.redirect(303, session.url);
  return res.status(200).json({ message: `payement effectué`, stripe });
};

export const stripeController = {
  stripeGestion,
};
