import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id:                new FormControl<string>(''),
    superhero:         new FormControl<string>('', {nonNullable: true}),
    publisher:         new FormControl<Publisher>(Publisher.DCComics),
    alter_ego:         new FormControl(''),
    first_appearance:  new FormControl(''),
    characters:        new FormControl(''),
    alt_img:          new FormControl('')
  });


  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Marvel - Comics'},
  ]
  // 94. Inyectar el servicio para el crud
  constructor(private HeroesService: HeroesService){}

  // 96. Hacer un getter para obtener el valor del formulario heroForm, que representa los datos de un objeto Hero. Luego, realiza una conversión de tipo y devuelve el objeto Hero.
  get currentHero():Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }


  onSubmit():void{
    // 95. Hacer validación para el caso de formulario invalido
    if(this.heroForm.invalid) return;


    // this.HeroesService.updatedHero(this.heroForm.value)
  }

}
