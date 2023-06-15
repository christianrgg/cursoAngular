import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {
// 88. Pegar el lo de bycapital.ts, hacer las importaciones, cambiar el nombre del metodo
public countries: Country[] = [];


constructor(private countriesService: CountriesService){}


searchByCountry(term:string):void{
// 89. Cambiar por pais.
  this.countriesService.searchCountry(term)
  .subscribe(countries => {
    this.countries = countries;
  });

}
}
