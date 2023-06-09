import { Component, Input } from '@angular/core';
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

  public onDeleteCharacter(index:number):void {
    //TODO EMITIR EL ID DEL PERSONAJE
    console.log({index});
  }
}
