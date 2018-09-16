import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'pow'
})
export class MyPipe implements PipeTransform{
  transform(value: number, ...args: any[]): number {
    return value * 2;
  }

}
