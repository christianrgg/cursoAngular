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
  onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id?:string):void {
    if(!id) return;
    //EMITIR EL ID DEL PERSONAJE
    this.onDelete.emit(id);
  }
}
