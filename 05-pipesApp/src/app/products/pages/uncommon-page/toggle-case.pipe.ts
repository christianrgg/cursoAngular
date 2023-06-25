// 1. Crear el archivo con la terminarción .pipe.ts con a-pipe
// 2. Agregar el nobre del pipe y nombre de la clase
// 3. Modificar el el value y colocarle string
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string):string {
    return value.toUpperCase();
  }
}
