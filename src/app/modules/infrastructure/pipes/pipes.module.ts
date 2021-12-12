import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterPipe } from "./search-filter.pipe";
import { SortPipe } from "./sort.pipe";



@NgModule({
  declarations: [
    SearchFilterPipe,
    SortPipe,
  ],
  exports: [
    SearchFilterPipe,
    SortPipe,
  ],
  imports: [
    CommonModule,
  ]
})
export class PipesModule { }
