import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchResponse, Gif } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

// 66. Crear constante que almacene los gifs, verificar la importacion de la interface e inicializarla vacia.
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
  }


  public searchTag (tag:string):void {

    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)
// 65. Indicarle a la petición que tipo dato es, para este caso es searchresponse
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
      .subscribe( resp =>{
//67. Asignar respuesta con gif a variable que los almacena
        this.gifList = resp.data;
        console.log({gifs: this.gifList});
      })

  }

}
