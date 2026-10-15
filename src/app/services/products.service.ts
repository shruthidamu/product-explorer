import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  apiUrl = 'https://fakestoreapi.com/products';
  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
