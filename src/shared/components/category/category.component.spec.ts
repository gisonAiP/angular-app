import { createRoutingFactory } from '@ngneat/spectator';
import { Spectator } from '@ngneat/spectator/jest';
import { CategoryComponent } from './category.component';


describe('CategoryComponent', () => {
  let spectator: Spectator<CategoryComponent>;
  const createComponent = createRoutingFactory({
    component: CategoryComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        title: 'Test title',
        imageURL: 'dummy-url',
        height: 100
      }
    });
  });

  it('should validate snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });

  it('should display category title', () => {
    expect(spectator.query('[data-test="category-title"]').textContent).toEqual('Test title');
  });

  it('should display image url', () => {
    expect(spectator.query<HTMLImageElement>('[data-test="category-image"]').src).toEqual('http://localhost/dummy-url');
  });

  it('should display image height', () => {
    expect(spectator.query<HTMLImageElement>('[data-test="category-image"]').height).toEqual(100);
  });
});

