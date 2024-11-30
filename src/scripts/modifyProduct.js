import { PATH_DB } from "../constants/path.js";
import fs from "node:fs/promises";

const modifyProduct = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const updatedProductList = products.map(
      ({ description, ...product }) => product
    );
    await fs.writeFile(PATH_DB, JSON.stringify(updatedProductList, null, 2));
  } catch (er) {
    console.log(er);
  }
};
modifyProduct();
