import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    SearchComponent
  ],
  imports: [],
  exports: [
    SearchComponent,
    ProductComponent,
    CategoryComponent,
  ],
  providers: []
})
export class SharedModule { }
