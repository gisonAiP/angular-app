import { Product } from '../../shared/model/product.model';
import { Category } from '../../shared/model/category.model';

export interface MainState {
  products: Product[],
  categories: Category[]
}
