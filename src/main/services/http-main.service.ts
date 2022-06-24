import { HttpClient, HttpParams } from '@angular/common/http';
import { Environment, ENVIRONMENT } from '../../environments/environment.model';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from "../../shared/model/product.model";
import { BaseHttpService } from "../../shared/services/base-http.service";
import {Category} from "../../shared/model/category.model";

@Injectable({
  providedIn: 'root'
})
export class MainHttpService extends BaseHttpService {
  env = 'http://localhost:3005/api'
  constructor(
    private http: HttpClient,
    // load env from environment file!!
  ) {
    super();
  }


  public getProducts(): Observable<Product[]> {
    const request = this.http.get<Product[]>(`${this.env}/products`);
    return this.handleRequest(request);
  }

  public getCategories(): Observable<Category[]> {
    const request = this.http.get<Category[]>(`${this.env}/categories`);
    return this.handleRequest(request);
  }
}
