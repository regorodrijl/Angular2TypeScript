import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPrefixPipe'
})
export class NumberPrefixPipePipe implements PipeTransform {

  transform(value: string, pais?: string): string {
    let prefijo;

    switch(pais){
      case 'ES':
        prefijo='+34';
        break;
      case 'FR':
        prefijo='+33';
        break;
    }
    return prefijo+" "+value;
  }

}
