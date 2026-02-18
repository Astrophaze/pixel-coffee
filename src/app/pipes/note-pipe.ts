import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note',
})
export class NotePipe implements PipeTransform {

  transform(value: number): string {
    let string = '';
    for(let i = 0; i < value; i++) {
      string += "<img class='mx-1' src='/images/star.png'>"
    }
    return string;
  }

}
