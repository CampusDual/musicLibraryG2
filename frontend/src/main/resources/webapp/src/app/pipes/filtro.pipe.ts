import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(lista : any[], texto: string): any[] {
    console.log(lista);
    return lista;
  }

}
