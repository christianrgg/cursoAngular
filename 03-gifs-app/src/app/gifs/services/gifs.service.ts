import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagHistory: string[] = [];
  private apiKey: string = '4wx7dk58fbdCKoFJmnbzMlea2WXb9wvd'
  //60. Optimización del url
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs'

  // 58. Inyectar el modulo httpclientemodule
  constructor(private http: HttpClient) {}

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
    // 61. Para optimizar la url con los parametros, agregarlos a una clase HttpParams, asegurarse de importarlo
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    // 59. Copiar la liga generada por postman agregar https:// y pegarla en el llamado del servicio http (OBSERVABLE) y suscribirse para escuchar los llamados la primera parte del url va en el paso 60 "https://api.giphy.com/v1/gifs/search?api_key=4wx7dk58fbdCKoFJmnbzMlea2WXb9wvd&q=valorant&limit=10"
    this.http.get(`${this.serviceUrl}/search`,{params})
      .subscribe( resp =>{
        console.log(resp);
      })

  }

}
