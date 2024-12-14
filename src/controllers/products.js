import {
  getAllProducts,
  addProduct,
  deleteProduct,
} from '../services/products.js';

import createHttpError from 'http-errors';

export const getProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const addProductController = async (req, res) => {
  const product = await addProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const product = await deleteProduct(req.params.id);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  // res.status(204).end();
  res.sendStatus(204);
};
