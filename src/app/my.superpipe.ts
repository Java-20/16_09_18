import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'superpipe',
  pure:false
})
export class MySuperpipe implements PipeTransform{
  transform(value: string[], args: string): string[] {
    return value.filter((v)=>{
      return v.toLowerCase().startsWith(args.toLowerCase());
    })
  }


}
