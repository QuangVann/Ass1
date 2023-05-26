
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  getProduct(): Observable <IProduct[]>{
    return this.http.get<IProduct[]>('  http://localhost:3000/products')
  }
  getProducts(id: number | String): Observable <IProduct[]>{
    return this.http.get<IProduct[]>('  http://localhost:3000/products/'+ id)
  }
  addProduct(product : IProduct): Observable <IProduct[]>{
    return this.http.post<IProduct[]>('  http://localhost:3000/products', product)
  }

}
