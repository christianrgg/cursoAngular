import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
// 91. implementar on oninit y la interfaz
export class CountryPageComponent implements OnInit {
// 90. Inyectar servicios ActivatedRoute,
// 93. Inyectar el servicio  CountriesService,
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
    ){}

  ngOnInit(): void {
// 91. Suscribirse a los cambios de parámetros en la URL actual
    this.activatedRoute.params
    .subscribe(({id}) => {
//94. Llamar al servicio countryservice que  y la funcion  searchCountryByAlphaCode y pasarle el id(observable help ayuda a al observable de arriba)
      this.countriesService.searchCountryByAlphaCode(id)
      .subscribe(country => {
        console.log({country});
      })
    })
  }
}
