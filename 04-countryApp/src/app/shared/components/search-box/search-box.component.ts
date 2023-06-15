
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

@Input()
  public placeholder:string = '';


// 63. Crear un emitidor de eventos para el input
  @Output()
  public onValue = new EventEmitter<string>();

// 65. Crear el evento emitValue
  emitValue(value:string):void{
    this.onValue.emit(value);
  }
}
