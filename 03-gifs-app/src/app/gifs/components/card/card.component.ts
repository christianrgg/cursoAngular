// 83. Crear el componente para renderizar el gifCard, con el objetivo que sea reutilizable por otros paginas,  que es este archivo "ng g c gifs/components/card". Colocarle de nombre de selector gif-cards
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})

//85. Hacer validación  que gif siempre lleve un elemento usando el ciclo de vida de angular "oninit" este se ejcuta cuando el componente se ha inicializado

export class CardComponent implements OnInit {

//84. Recibir el gif con decorador escuchador de eventos Input y decirle que siempre tendras el valor del evento.
  @Input()
  public gif!: Gif;

// 86. Posicionarse con sobre cardcomponent y hacer clic y presionar punto y seleccionar: "implementar la interfaz OnInit"
  ngOnInit(): void {
//87. Hacer validaciones para mensaje de error
    if(!this.gif) throw new Error('Gif property is required');
  }
}
