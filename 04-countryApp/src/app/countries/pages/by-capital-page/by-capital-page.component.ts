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
  public countries: Country[] = [];
// 110 Crear propiedad para carga de espinner.
 public isLoading:boolean = false;


  constructor(private countriesService: CountriesService){}


  searchByCapital(term:string):void{
// 111.  Al iniciar este metodo cambiar a true isloading
    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
// 112. Al terminar de hacer la peticion cambiar a false
      this.isLoading = false;
    });

  }
}
