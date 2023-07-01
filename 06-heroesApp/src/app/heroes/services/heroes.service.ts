// 44. Craer el servicio para conectar con el backend con el snipper a-service-http, colocar el nombre HeroesService

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class HeroesService {
  // 47. Crear propiedad para importar la variable de entorno.
  private baseUrl: string = environments.baseUrl


  constructor(private httpClient: HttpClient) { }

  // 46. Crear la funcion que hara la petición a la pai y devolvera heroes
  getHeroes():Observable<Hero[]> {
    // 48. Agregar entre backticks la urlbase con ruta del enpoint
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }




}

