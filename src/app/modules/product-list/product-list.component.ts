import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../infrastructure/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]
  searchText: string;

  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(products => this.products = products);
  }

}
