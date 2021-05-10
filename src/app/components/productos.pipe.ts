import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productos'
})
export class ProductosPipe implements PipeTransform {

transform(value: any, arg: any): any {
   const result = [];
   for( const prod of value){
    if(prod.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      result.push(prod)
    }else if(prod.descripcion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      result.push(prod)
    }
   }
  return result
}
}
