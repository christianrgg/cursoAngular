//Pasos para colocar ID de dependencias externas
//1.Ver https://www.npmjs.com/package/uuid e instalar "npm i uuid"
//2. Instalar la siguiente dependencia "npm i --save-dev @types/uuid"
//3. Importar y asignar como funcion uuid "import { v4 as uuid } from 'uuid';"
//4. Agregar id en character y en valor llamar la funcion "id: uuid(),"
//5. En metodo newCharacter, crear un nuevo objeto y pasarle la propiedad id.
//6. Que ese metodo agregue/empuje al listado el new Character

import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krilin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 9000,
    }
  ];

  addCharacter( character: Character):void{
    const newCharacter: Character = {id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById(id:string) {
    this.characters = this.characters.filter(character => character.id !==id)
  }



}
