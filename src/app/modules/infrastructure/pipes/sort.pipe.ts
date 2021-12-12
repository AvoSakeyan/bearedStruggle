import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {

  transform(list: any[], sortText: string): any {
    return list.sort((a: any, b: any) => {
      if (a[sortText] < b[sortText]) {
        return -1;
      } else if (a[sortText] > b[sortText]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
