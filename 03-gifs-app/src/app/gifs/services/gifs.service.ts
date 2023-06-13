import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagHistory: string[] = [];
  private apiKey: string = '4wx7dk58fbdCKoFJmnbzMlea2WXb9wvd'
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs'

// 81. Llamar el metodo cuando el servicio sea inyectado
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

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
    this.saveLocalStorage();

  }


  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }

// 78. Metodo para leer localstorage
  private loadLocalStorage():void{
// 79. Si no hay nada en el localstorage, decirle que no haga nada
  if(!localStorage.getItem('history')) return;
//80. Si hay algo, asignarlo y convertirlo a json y asignarle el null operation
  this._tagHistory = JSON.parse(localStorage.getItem('history')!);

// 82. Mostrar en la pagina de busqueda la primera etiqueta del historial o indice
    if(this._tagHistory.length === 0) return;
    this.searchTag(this._tagHistory[0]);

  }



  public searchTag (tag:string):void {

    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe( resp =>{
        this.gifList = resp.data;
      })

  }

}
