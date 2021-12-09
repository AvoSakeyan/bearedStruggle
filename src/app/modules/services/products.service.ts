import { Injectable } from '@angular/core';
import { PRODUCT_LIST } from '../../../assets/data/product_list'
import { Observable, of } from 'rxjs';
import { Product } from '../infrastructure/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProductList(): Observable<Product[]>{
    return of(PRODUCT_LIST as Product[])
  }

}
