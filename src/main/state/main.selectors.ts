import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MainState } from './main.state';

export const getMainFeatureState = createFeatureSelector<MainState>('main');

export const selectProducts = createSelector(
  getMainFeatureState,
  (state) => {
    console.log('selectors', state)
    return state.products
  }
);

export const selectCategories = createSelector(
  getMainFeatureState,
  (state) => state.categories
);
