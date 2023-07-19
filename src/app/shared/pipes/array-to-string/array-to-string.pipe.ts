import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(array: any[], ...args: unknown[]): string {
    return array.toString();
  }

}
