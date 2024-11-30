import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

export const getProductsByMinPrice = async (price) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const productByPrice = products.filter((product) => product.price > price);
    console.log(productByPrice);
  } catch (error) {
    console.log(error);
  }
};

getProductsByMinPrice(400);
