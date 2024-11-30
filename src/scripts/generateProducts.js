import { PATH_DB } from "../constants/path.js";
import fs from "node:fs/promises";
import { createFakeProduct } from "../utils/createFakeProduct.js";

export const generateProducts = async (amount) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    for (let index = 0; index < amount; index++) {
      products.push(createFakeProduct());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2));
  } catch (error) {
    console.log(error);
  }
};

generateProducts(5);
