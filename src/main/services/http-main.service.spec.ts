import { MainHttpService } from "./http-main.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Product } from '../../shared/model/product.model';
import { Category } from '../../shared/model/category.model';

describe('MainHttpService', () => {
  let service: MainHttpService;
  let httpMock: HttpTestingController = null;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        MainHttpService
      ]
    });
    service = TestBed.inject(MainHttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    it('should make request under correct URI with NO params', async () => {
      const response = service.getProducts().toPromise();
      const request = httpMock.expectOne((req) => {
        return req.method === 'GET' &&
          req.url.match('/products').length > 0;
      });
      request.flush([] as Product[]);
      const stats = await response;
      expect(stats).toBeTruthy();
    });
  });

  describe('getCategories', () => {
    it('should make request under correct URI with NO params', async () => {
      const response = service.getCategories().toPromise();
      const request = httpMock.expectOne((req) => {
        return req.method === 'GET' &&
          req.url.match('/categories').length > 0;
      });
      request.flush([] as Category[]);
      const stats = await response;
      expect(stats).toBeTruthy();
    });
  });
});
