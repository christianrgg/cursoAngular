import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
// 70. Agregar decorador para el argumento que van a recibir e inicializarlo vacio
  @Input()
  public gifs: Gif[] = [];
}
