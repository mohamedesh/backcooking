import Categorie from "../models/Categorie.js";

const displayCategorie = async () => {
  try {
    const display = await Categorie.findAll();
    console.log(display);
    return display;
  } catch (e) {
    console.error(e.message);
    return null;
  }
};

export const categorieDao = {
  displayCategorie,
};
