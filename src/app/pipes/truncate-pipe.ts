import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length <= limit) {
      return value;
    } else {
      // let subString = value.substring(0, limit);
      // return subString.substring(0, Math.min(subString.length, subString.lastIndexOf(' ')));

      let newValue = value.substring(0, limit);
      let newLimit = newValue.lastIndexOf(' ');
      let newLimit2 = newValue.lastIndexOf(',');
      return value.substring(0, newLimit2);
    }
  }
}
