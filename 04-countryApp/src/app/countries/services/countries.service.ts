import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of} from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }



  searchCapital(term:string): Observable <Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
// 85. Manejo de errores con extensiones reactivas rxjs. La logica es atrapa el error y regresa un arreglo vacio para que se dispare la alerta "No hay paises que mostrar". El error solo mostrarlo entre parentesis sin escribir error.
//el of construye un observable del argumento que le envian y en lugar del error regresa un observable con arreglo vacio.
    return this.http.get<Country[]>(url)
    .pipe(
      catchError ( () => of([]))
    );
  }

}
