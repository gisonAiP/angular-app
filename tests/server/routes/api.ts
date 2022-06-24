import express from 'express';
import { productsData } from '../../data/products.data';
import { categoriesData } from '../../data/categories.data';

const apiRouter = express.Router();

apiRouter.get('/products', (req, res) => {
  return res.send(productsData);
});

apiRouter.get('/categories', (req, res) => {
  return res.send(categoriesData);
});

export {
  apiRouter
};
