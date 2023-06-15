// 69. Crear el archivo service(este)
// 69. Crear el modulo con a-module-httpcliente (para cuando hace peticiones web)
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
// 71. Hacer una constante de la base de la url de la api https://restcountries.com/v3.1/
  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }


// 72. Crear un nuevo metodo para la busqueda por capital
  searchCapital(term:string): Observable <Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url);
  }

}
