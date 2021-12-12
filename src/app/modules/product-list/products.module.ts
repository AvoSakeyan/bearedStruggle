import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PipesModule } from "../infrastructure/pipes/pipes.module";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { MatDialogModule } from "@angular/material/dialog";
import {MatCarouselModule} from "@ngmodule/material-carousel";



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    PipesModule,
    MatDialogModule,
    MatCarouselModule,
  ]
})
export class ProductsModule { }
