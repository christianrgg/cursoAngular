import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory: string[] = [];

  get tagHistory(){
    return [...this._tagHistory]
  }

// 49. Crear un metodo privado para organizar los tags de modo que no coloque los que se repitan
  private organizeHistory(tag:string):void{
// 50. Convertir las etiquetas en minusculas porque javascript es lowercase sensitive
    tag = tag.toLowerCase();

// 51. Condicion para revisar si etiqueta ya existe en el arregle, si existe eliminarla y pasar la nueva etiqueta igual al inicio del arreglo.
    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !==tag)
    }
    this._tagHistory.unshift(tag);
// 52. Condicion para limitar la longitud del arreglo a 10 elementos
    this._tagHistory = this._tagHistory.slice(0,10);
  }


  public searchTag (tag:string):void {
// 48. Agregar validacion para caso que el tag este vacio. Considera que es string
    if(tag.length === 0) return;

// 53. Llamar al metodo organizar historial
    this.organizeHistory(tag);
  }

  constructor() { }

}
