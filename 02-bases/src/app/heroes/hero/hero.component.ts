import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {
  public name: string = "ironman";
  public age:  number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  // Si se le coloca private el metodo no se puede usar, solo dentro de la clase y el html esta fuera de la clase
  public getHeroesDescription():string {
    return `${this.name} - ${this.age}`
  }

}
