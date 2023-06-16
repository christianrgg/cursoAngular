import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})

export class CountryPageComponent implements OnInit {
// 99. Crear prpiedad publica country, esta puede ser nulo, asigregar
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    ){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id) )
    )
    .subscribe(country => {
      if(!country) {
        return this.router.navigateByUrl('');
      }

// 100. Asignar la propiedad externa a la propiedad de la clase
      // console.log('Tenemos un pais');
      // return
      return this.country = country;

    })
  }
}
