import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'special'
})
export class SpecialPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
