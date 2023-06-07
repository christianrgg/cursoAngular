import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent {
  public name: string = "ironman";
  public age:  number = 45;


}
