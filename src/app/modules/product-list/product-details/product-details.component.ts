import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Product} from "../../infrastructure/interfaces/product.interface";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  quantity: number;
  totalAmount: number;

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit(): void {
  }

  calcAmount() {
    this.totalAmount = this.quantity * this.product.price
  }
}
