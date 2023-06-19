import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
// 130. Hacer un tipo (similar a interface) con los valores permitidos para regiones
type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  // 129. Hacer un arreglo con las regiones permitidas
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
// 133 . Hacer propiedad publica para que el boton se muestre activo
  public  selectedRegion?: Region;

  constructor(private countriesService: CountriesService){}

// 134. Modificar el termino recibido de string por region en todo el metodo.
searchByRegion(region: Region):void{
// 135. asignar el valor de la region al hacer clic al estado active
  this.selectedRegion = region;

  this.countriesService.searchRegion(region)
  .subscribe(countries => {
    this.countries = countries;
  });
}
}
