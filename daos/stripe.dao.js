import Stripe from "stripe";
import Plat from "../models/Plat.js";

const stripe = new Stripe(
  "sk_test_51NciUpExUtm9HdQOXTvXavowa6r4yORyRpKsid1nlgjBxdoDwabwyU6RFcKqUiG3hc7r6mA3TXlcSwNds1VFAYdS00v3DNAQzs"
);

const successUrl = "http://localhost:3335/success"; // Remplace par ton URL de succès
const cancelUrl = "http://localhost:3335/cancel"; // Remplace par ton URL d'annulation

// Utilisez une fonction asynchrone pour attendre la récupération des plats
const payementStripe = async (quant, id) => {
  const plats = await Plat.findByPk(id);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: plats.name,
            description: plats.description,
          },
          unit_amount: plats.price,
        },
        quantity: quant,
      },
    ],
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
  });
  return session;
};
export const stripeDao = {
  payementStripe,
};
