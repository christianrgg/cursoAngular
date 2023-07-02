import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
})


// 56. Implementar la interfaz oninit y cambiar nombre de selector
// 55. Recibir el hero
export class CardComponent implements OnInit {
  @Input()
  public hero!: Hero;


  ngOnInit(): void {
    if (!this.hero) throw Error(`Hero property is required`)
  }

}
