import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, switchMap} from "rxjs/operators";
import {
  getCategories,
  getCategoriesFail,
  getCategoriesSuccess,
  getProducts,
  getProductsFail,
  getProductsSuccess
} from "./main.actions";
import { MainHttpService } from '../services/http-main.service';
import { Product } from '../../shared/model/product.model';
import { Category } from '../../shared/model/category.model';

@Injectable()
export class MainEffects {

  constructor(private actions$: Actions,
              private httpService: MainHttpService
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProducts),
      switchMap(() =>
        {
          console.log('hej!!!!!!!!!!!!!!!!')
          return  this.httpService.getProducts().pipe(
            map((products: Product[]) => {
              console.log({products})
              return getProductsSuccess({ products });
            }),
            catchError((error: any) => {
              return [getProductsFail({error})];
            })
          )
        }
      )
    )
  );

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategories),
      switchMap(() =>
        this.httpService.getCategories().pipe(
          map((categories: Category[]) => {
            return getCategoriesSuccess({ categories });
          }),
          catchError((error: any) => {
            return [getCategoriesFail({error})];
          })
        )
      )
    )
  );
}
