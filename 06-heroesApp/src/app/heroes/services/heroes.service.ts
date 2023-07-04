import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
  private baseUrl: string = environments.baseUrl


  constructor(private httpClient: HttpClient) { }

  getHeroes():Observable<Hero[]> {

    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }



  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error => of (undefined))
    )
  }

  // 67. Hacer la consulta en posmat http://localhost:3000/heroes?q=b&_limit=6 jugar, trabajar en el termino de busqueda. con el siguiente metodo. Va a recibir un dato de búsqueda de tipo string y regresara un arreglo de heroes o de heroes vacio.

  getSuggestions(query: string):Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }



}

