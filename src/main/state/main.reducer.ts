import {createReducer, on} from '@ngrx/store';
import { MainState } from './main.state';
import {getCategoriesSuccess, getProductsSuccess} from "./main.actions";

export const initialState: MainState = {
  products: [],
  categories: []
};

export const mainReducer = createReducer(
  initialState,
  on(getCategoriesSuccess, (state, {categories}) => {
    console.log({})
    return  {
      ...state,
      categories
    }
  }),
  on(getProductsSuccess, (state, {products}) => {
    console.log('reducer', products)
    const aa = {
      ...state,
      products
    }
    console.log({aa})
    return aa;
  }),
);
