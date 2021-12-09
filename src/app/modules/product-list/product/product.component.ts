import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../infrastructure/interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  openDetails = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  seeDetails() {
   this.openDetails = true;
  }
}
