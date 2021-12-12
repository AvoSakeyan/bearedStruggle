import { Component, Input } from '@angular/core';
import { Product } from '../../infrastructure/interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  openDetails = false;

  constructor() { }

  seeDetails() {
   this.openDetails = true;
  }
}
