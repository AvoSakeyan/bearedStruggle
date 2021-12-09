import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../infrastructure/interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(

  ) {}

  ngOnInit(): void {
  }
}
