import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagHistory: string[] = [];
  private apiKey: string = '4wx7dk58fbdCKoFJmnbzMlea2WXb9wvd'
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs'

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
    // 77. Llamar al metodo de localstorage
    this.saveLocalStorage();

  }

  // 76. Crear un metodo para el almacenamiento de localstorage, recuerda local storage almacena solo string por lo que se debe convertir el json a string.
  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
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
