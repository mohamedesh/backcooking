import { categorieDao } from "../daos/categorie.dao.js";

const getCategorie = async (req, res) => {
  const ressource = await categorieDao.displayCategorie();
  if (!ressource) {
    return res
      .status(400)
      .json({ message: `les catégories ne sont pas apparus` });
  }
  return res
    .status(200)
    .json({ message: `les categories sont visibles`, ressource });
};

export const CategorieController = {
  getCategorie,
};
