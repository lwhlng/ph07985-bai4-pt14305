import { Injectable } from '@angular/core';
import{ Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  api = 'https://5e7e10d8fa19eb001651a4fd.mockapi.io/Product';
  constructor(
    private http: HttpClient
  ) { }

  getProducts():  Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
    //return this.products;
  }
}
