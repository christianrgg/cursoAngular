import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
// 68. Inyectar servicio para poder utilizarlo en componente de cardlist
  constructor(private gifsService: GifsService){}

// 69. Hacer el getter correspondiente que permita el acceso a giflist
  get gifs():Gif[] {
    return this.gifsService.gifList;
  }

}
