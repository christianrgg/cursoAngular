import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {
// 74. Crear propiedad countries de tipo countri e inicializarlo vacio
  public countries: Country[] = [];

  // 73. Inyectar el servicio a  utilizar CountriesService
  constructor(private countriesService: CountriesService){}


  searchByCapital(term:string):void{
// 75. Usar el servicio mandandole el termino de busqueda
    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
    });

  }
}
