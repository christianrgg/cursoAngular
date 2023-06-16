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
  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
// 97. Propiedad para sacar a la persona de la pantalla en caso de null
    private router: Router,
    ){}
// 95. Como es un observable se tiene acceso a los pipes e importar el switchMap que recibe los params y regresa un nuevo observable y desestruturar el id. En el segundo observable cambiar id por country y borrar el contenido
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id) )
    )
    .subscribe(country => {
      // console.log({country});
// 98. Agregar condicion si el pais buscado no existe y si si existe
      if(!country) {
        return this.router.navigateByUrl('');
      }

      console.log('Tenemos un pais');
      return

    })
  }
}
