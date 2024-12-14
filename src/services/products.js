import { ProductCollection } from '../db/models/Product.js';

// export const getAllProducts = async () => {
//   const products = await ProductCollection.find();
//   return products;
// };
export const getAllProducts = () => ProductCollection.find();

export const addProduct = (productData) =>
  ProductCollection.create(productData);

export const deleteProduct = (id) => ProductCollection.findByIdAndDelete(id);
