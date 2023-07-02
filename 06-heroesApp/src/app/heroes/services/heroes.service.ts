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

  // 63. Crear un nuevo servicio para traer un heroe por id

  getHeroById(id: string): Observable<Hero | undefined> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(error => of (undefined))
    )
  }


}

