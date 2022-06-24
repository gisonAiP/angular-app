import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { MainState } from "./main.state";
import { getCategories, getProducts } from './main.actions';
import { selectCategories, selectProducts } from './main.selectors';

@Injectable({
  providedIn: 'root',
})
export class MainFacade {
  public categories$ = this.store.select(selectCategories);
  public products$ = this.store.select(selectProducts);

  constructor(private store: Store<MainState>) {}

  getProducts(): void {
    this.store.dispatch(getProducts());
  }

  getCategories(): void {
    this.store.dispatch(getCategories());
  }
}
