import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
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

  getSuggestions(query: string):Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`)
  }

  // 85. Realizar las pruebas con postman para editar: (a)clic en pestaña body,  seleccionar raw y en tipo JSON, despues cambiar el tipo de peticion a patch y hacer las pruebas necesarias de actualización.
  // 86. Crear los servicios para agregar heroe
  addHero(hero:Hero): Observable<Hero>{
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero)
  }

  // 87. Crear el servicio para actualizar heroes, agregar validación de id, y agregar id a url
  updatedHero(hero:Hero): Observable<Hero>{
    if(!hero.id) throw Error ('Hero id is required')

    return this.httpClient.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }

  // 88. Crear el servicio para eliminar heroe, recibe un id de tipo string, que es un observable de tipo booleno(Si se elimino correctamente resp 200 es true, si hay error 404 y false) que emite true si la solicitud se completa correctamente y false si se produce un error durante la solicitud.
  deletedHeroById(id:string): Observable<boolean>{
    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`)
    .pipe(
      catchError(err => of (false)),
      map(resp => true)
    );
  }
}

