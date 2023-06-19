import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
// 146. Traer los componentes del cache usar Oniniti e implementar la interfaz
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading:boolean = false;
// 148. Crear propiedad para mantener el termino en cache y recuperarlo al volver a la pagina
  public initialValue: string = '';


  constructor(private countriesService: CountriesService){}

// 147. asigna la propiedad "countries" de la instancia "this" al valor de la propiedad "countries" almacenada en el objeto "cacheStore.byCapital" del servicio "countriesService" en el método "ngOnInit()" para inicializar con los valores del ngoninit
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    // 149. Agregar el valor inicial para term,
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }


  searchByCapital(term:string):void{
    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });

  }
}
