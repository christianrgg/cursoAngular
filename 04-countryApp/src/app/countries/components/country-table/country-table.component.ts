// 77. Crear componente para las tablas (este).
// 78. Cambiar el nombre del selector.
import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
// 83. Darle formato a la imagen de bandera.
@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img{
      width: 25px
    }`
  ]
})
export class CountryTableComponent {

// 79. Recibir los paises mediante inputs
  @Input()
  public countries: Country[] = [];

}
