import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    }
  ]

  //onDelete = Index value:number
  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  public onDeleteCharacter(index:number):void {
    //TODO EMITIR EL ID DEL PERSONAJE
    this.onDelete.emit(index);
  }
}
