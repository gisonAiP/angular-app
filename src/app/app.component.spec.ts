import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from '../main/components/products/products.component';
import { CategoriesComponent } from '../main/components/categories/categories.component';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createRoutingFactory({
    component: AppComponent,
    shallow: true,
    providers: [],
    declarations: [
      MockComponent(HeaderComponent),
      MockComponent(FooterComponent),
      MockComponent(ProductsComponent),
      MockComponent(CategoriesComponent),
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
  });

  it('should validate snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});

