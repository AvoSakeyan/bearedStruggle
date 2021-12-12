import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { ProductsModule } from './product-list/products.module';
import { SharedModule } from '../shared/shared.module';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    ProductsModule,
  ]
})
export class CoreModule { }
