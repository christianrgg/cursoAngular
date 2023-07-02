import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit{

  // La declaración hero?: Hero permite que la propiedad hero sea null o undefined hasta que se complete la solicitud al servicio y se obtenga el héroe correspondiente. Una vez que se asigna el valor del héroe, la propiedad deja de ser opcional y se convierte en un objeto Hero válido.
  public hero?: Hero;

  // 64. Inyectar el servicio getherobyid
  // Pasarle al constructor parametros para: (a)obtener información sobre los héroes, (b) proporciona acceso a los parámetros de la URL actual y (c) navegar entre las páginas
  constructor(
    private HeroesService: HeroesService,
    private activateRoute: ActivatedRoute,
    private router: Router
    ){}
  // 65. Implementar on Init,  activar routes y suscribirse
  ngOnInit(): void {
    // devuelve un Observable que emite los cambios en los parámetros de la ruta.
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.HeroesService.getHeroById(id)), //transformar el Observable de los parámetros de la ruta en un nuevo Observable que emite el resultado de llamar al método getHeroById del servicio HeroesService, pasando el parámetro id. // getHeroById es invocado para obtener información sobre el héroe con el ID especificado.
    ).subscribe(hero => {
      //  Si el héroe es nulo (no se encontró un héroe con el ID especificado), se navega a la página de la lista de héroes usando this.router.navigate(['/heroes/list']).
      if(!hero) return this.router.navigate(['/heroes/list'])
      //Si se encontró un héroe, se asigna a la propiedad hero de la clase y se completa el flujo de la suscripción.
      this.hero = hero;
      return
    })
  }

}
