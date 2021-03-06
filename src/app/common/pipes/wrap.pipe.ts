import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap',
})
export class WrapPipe implements PipeTransform {
  transform(value: string, ...args: any[]): unknown {
    return value.split('').slice(0, args[0]).join('') + '...';
  }
}
