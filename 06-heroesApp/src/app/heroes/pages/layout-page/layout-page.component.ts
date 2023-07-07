import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})


export class LayoutPageComponent {
  public sidebarItems = [
    {label: 'Listado', icon:'label', url:'./list'},
    {label: 'Añadir', icon:'add', url:'./new-hero'},
    {label: 'Buscar', icon:'search', url:'./search'}
  ]
  //127. Iyectar el servicio
  // 130. Crear propiedad
  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  //129. Crear un metodo para obtener el usuario
  get user(): User | undefined{
    return this.authService.currentUser
  }

  //128. Crear el metodo onLogout
  onLogout(){
    this.authService.logout();
    this.router.navigate(['auth/login'])
  }



}
