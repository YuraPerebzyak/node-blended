import { Router } from 'express';

import {
  addProductController,
  deleteProductController,
  getProductsController,
} from '../controllers/products.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/products', ctrlWrapper(getProductsController));

router.post('/products', ctrlWrapper(addProductController));

router.delete('/products/:id', ctrlWrapper(deleteProductController));

export default router;
