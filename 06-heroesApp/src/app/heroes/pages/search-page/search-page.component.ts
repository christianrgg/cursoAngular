import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  // 69. Crear propiedad para el formulario e importar
  public searchInput = new FormControl('');


  // 72. Crear propiedad para almacenar resultado cada que el searchInput cambia
  public heroes: Hero[] = [];

  //80. Crear propiedad para almacenar opciones seleccionadas
  public selectedHero?: Hero;

  // 74. Inyectar el servicio
  constructor(private heroesService: HeroesService){}

  // 73. Crear metodo que va alimentar la propiedad heroes
  searchHero(){
    const value: string = this.searchInput.value || '';

    //75. Llamar al servicio get suggestion pasandole el termino del query y suscribirse
    this.heroesService.getSuggestions(value)
      .subscribe(heroes => this.heroes = heroes);
  }

  // 79. Implementar el metodo onSelectedOption que sera de tipo MatAutocompleteSelectedEvent
  onSelectedOption(event: MatAutocompleteSelectedEvent):void{
    //81. Asignar valor en caso de nulo
    if(!event.option.value){
      this.selectedHero = undefined;
      return
    }
    // 82. Asignar cuando haya un heroe
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;

  }



}
