import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Product } from "../../infrastructure/interfaces/product.interface";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  quantity: number;
  totalAmount: number;

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) { }

  calcAmount() {
    this.totalAmount = this.quantity * this.product.price
  }
}
