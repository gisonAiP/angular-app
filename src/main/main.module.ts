import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './state/main.effects';
import { mainReducer } from './state/main.reducer';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ProductsComponent,
    CategoriesComponent,
  ],
  imports: [
    SharedModule,
    EffectsModule.forFeature([MainEffects]),
    StoreModule.forFeature('main', mainReducer),
    CommonModule,
  ],
  exports: [
    ProductsComponent,
    CategoriesComponent,
  ],
  providers: []
})
export class MainModule { }
