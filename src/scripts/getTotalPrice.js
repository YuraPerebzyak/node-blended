import { PATH_DB } from "../constants/path.js";
import fs from "node:fs/promises";

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const totalPrice = products.reduce((acc, { price }) => {
      acc += Number(price);
      return acc;
    }, 0);
    console.log(totalPrice.toFixed(2));
  } catch (error) {
    console.log(error);
  }
};

getTotalPrice();
