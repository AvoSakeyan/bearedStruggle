import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../infrastructure/interfaces/product.interface';
import { MatDialog } from "@angular/material/dialog";
import {ProductDetailsComponent} from "./product-details/product-details.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[]
  searchText: string;
  showModal = false;
  sortBy: string;

  sortValues = [
    {value: 'name', label: 'Name'},
    {value: 'price', label: 'Price'},
  ]

  constructor(
    private dialog: MatDialog,
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(products => this.products = products);
  }

  openDialog(product: Product) {
    this.dialog.open(ProductDetailsComponent, {data: product})
  }
}
