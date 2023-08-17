import Plat from "../models/Plat.js";

const getPlats = async () => {
  try {
    const plat = await Plat.findAll();
    return plat;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const getPlatByCategorie = async (id) => {
  try {
    const plat = await Plat.findAll({
      where: { categorieId: id },
    });
    return plat;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const postPlatByCategorie = async (
  name,
  description,
  ingredient,
  price,
  calories,
  quantity,
  id
) => {
  try {
    const plat = await Plat.create({
      name,
      description,
      ingredient,
      price,
      calories,
      quantity,
      CategorieId: id,
    });
    return plat;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const platDao = {
  getPlats,
  getPlatByCategorie,
  postPlatByCategorie,
};
