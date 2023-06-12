import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory: string[] = [];
// 54. Crear propiedad con clave de Apikey
  private apiKey: string = '4wx7dk58fbdCKoFJmnbzMlea2WXb9wvd'
// 55. En postman Crear una nueva app, ir a la documentación y copiar la gifURL y pegarla en postaman "api.giphy.com/v1/gifs/search?api_key=4wx7dk58fbdCKoFJmnbzMlea2WXb9wvd" cambiar la ultima palabra por search, agregar apikey y clic en enviar
// 56. En los query parametros agregar q - valoran y limit - 10
  get tagHistory(){
    return [...this._tagHistory]
  }


  private organizeHistory(tag:string):void{

    tag = tag.toLowerCase();


    if(this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !==tag)
    }
    this._tagHistory.unshift(tag);

    this._tagHistory = this._tagHistory.slice(0,10);
  }


  public searchTag (tag:string):void {

    if(tag.length === 0) return;

    this.organizeHistory(tag);
  }

  constructor() { }

}
