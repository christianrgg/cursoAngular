//Para generar el servicio es a-service
//Para generar las importaciones faltantes posicionarse sobre el objeto, interface etc y presiona CTRL + .
//Cambiar el nombre de el servicio
//Colocar los metodos necesarios

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      name: 'Krilin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegueta',
      power: 9000,
    }
  ];

  onNewCharacter( character: Character):void{
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }



}
