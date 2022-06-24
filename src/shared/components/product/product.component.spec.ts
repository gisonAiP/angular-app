import { createRoutingFactory } from '@ngneat/spectator';
import { Spectator } from '@ngneat/spectator/jest';
import { ProductComponent } from "./product.component";


describe('ProductComponent', () => {
  let spectator: Spectator<ProductComponent>;
  const createComponent = createRoutingFactory({
    component: ProductComponent,
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        product: {
          "id": 34,
          "price": "123",
          "location": "Auckland",
          "title": "Title test",
          "description": "qq",
          "owner": {
            "id": 1,
            "firstName": "Mateusz",
            "lastName": "Torba",
            "profilePicUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7b/City_Hall_of_Mountain_View_-_panoramio_-_Aleh_Haiko.jpg"
          },
          "viewerHasSaved": false,
          "displayResources": [
            {
              "id": 118,
              "picUrl": "http://135.125.133.86:8082/api/upload/d6cd3e44-2b6e-40e0-a78a-d186bce81f37",
              "location": null,
              "description": null
            }
          ]
        }
      }
    });
  });

  it('should validate snapshot', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });

  it('should display product title', () => {
    expect(spectator.query('[data-test="product-title"]').textContent).toEqual('Title test');
  });

  it('should display product price', () => {
    expect(spectator.query('[data-test="product-price"]').textContent).toEqual('$123');
  });

  it('should display product location', () => {
    expect(spectator.query('[data-test="product-location"]').textContent).toEqual('Auckland');
  });
});

