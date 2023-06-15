import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
// 62. Crear un metodo para recibir el termino de busqueda
  searchByCapital(term:string):void{
    console.log('Desde bay capital page');
    console.log({term});
  }
}
