import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})

// 51. Implementar el metodo Oninit
export class ListPageComponent implements OnInit{

  // 49. Crear la propiedad para heroes con la interface de heroes e inicializarla vacia
  public heroes: Hero[] = [];

  // 50. Inyectar el servicio HeroeService
  constructor( private heroesService: HeroesService){}

  // 52. Llamar al servicio al iniciarse, obtener los heroes y asignar los heroes recibidos a los heroes de esta clase
  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(heroes => this.heroes = heroes)
  }
}
