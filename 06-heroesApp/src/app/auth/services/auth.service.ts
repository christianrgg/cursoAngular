// 118. Crear el servicio para autenticación a-service httpclient y nombrarlo AuthService y cambiar en el constructor el nombre de la variable por http solamente
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  // 119. Crar propiedad para base del url
  private baseUrl = environments.baseUrl;
  // 121. Crear la propiedad para usuario de tipo User, como al iniciarse por primera vez no existira colocarla como opcional ?
  private user?: User;

  constructor(private http: HttpClient) { }

  // 122. Como el usuario es privado crear un getter para que otros componentes lo puedan utilizar, usando structuredClone
  get currentUser(): User | undefined {
    if(!this.user) return undefined;
    return structuredClone(this.user);
  }

  // 123. Hacer un metodo para login que establezcla el usuario y lo grabe en localstorage
  login (email: string, password: string): Observable<User>{
     return this.http.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      tap(user => localStorage.setItem('token', user.id.toString())),
      )
  }
}
