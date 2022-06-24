import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/model/product.model';
import { Category } from '../../shared/model/category.model';

export const getProducts = createAction(
  '[Main] Get products'
);

export const getProductsSuccess = createAction(
  '[Main] Get products success',
  props<{ products: Product[] }>()
);

export const getProductsFail = createAction(
  '[Main] Get products fail',
  props<{ error: any }>()
);

export const getCategories = createAction(
  '[Main] Get categories',
);

export const getCategoriesSuccess = createAction(
  '[Main] Get categories success',
  props<{ categories: Category[] }>()
);

export const getCategoriesFail = createAction(
  '[Main] Get categories fail',
  props<{ error: any }>()
);
