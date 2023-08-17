import { platDao } from "../daos/plat.dao.js";

//ajouter route plat idividuelle

const allPlats = async (req, res) => {
  const ressource = await platDao.getPlats();
  if (!ressource) {
    return res
      .status(400)
      .json({ message: `aucun plat de la carte n'as pu être affiché` });
  }
  return res
    .status(200)
    .json({ message: `tous les plats sont affichés`, ressource });
};

const platByCategorie = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const ressource = await platDao.getPlatByCategorie(id);
  if (!ressource) {
    return res.status(400).json({ message: `aucun plat dans cette catégorie` });
  }
  return res.status(200).json({ message: `plat bien affiché`, ressource });
};

const addPlats = async (req, res) => {
  const { name, description, ingredient, price, calories, quantity } = req.body;
  const id = req.params.id;
  const ressource = await platDao.postPlatByCategorie(
    name,
    description,
    ingredient,
    price,
    calories,
    quantity,
    id
  );
  if (!ressource) {
    return res.status(400).json({ message: `plat non ajoutée` });
  }
  return res.status(200).json({ message: `plat ajouté`, ressource });
};

export const platController = {
  allPlats,
  platByCategorie,
  addPlats,
};
