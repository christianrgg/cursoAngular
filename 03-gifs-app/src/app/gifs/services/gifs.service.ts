// 34. Crear el archivo de servicios gifs.service.ts, este almacenará las busquedas y hará las solicitudes HTTP.
// 35. Dentro de este archivo escribir a-service y presionar tab
// 36. Agregar nombre del servicio "GifsService"

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

//37. Crear propiedad para almacenar búsquedas, de tipo privadas, y su tipo sera un arreglo de strings, inicializarlo vacio.
  private _tagHistory: string[] = [];

//38. Crear un getter (propio de los metodos privados) para poder para poder acceder y retornar una copia o referencia de _tagHistory y para mantener al ciclo de deteccion de angular actulizado

  get tagHistory(){
    return [...this._tagHistory]
  }

// 39. Crear un nuevo metodo llamado searchTag que lleve como argumento un etiqueta de tipo string y no regresa nada.

  public searchTag (tag:string):void {
//40. La ejecución debe agregar las etiquetas inicio del arreglo tagHistory.
    this._tagHistory.unshift(tag);
  }

  constructor() { }

}
