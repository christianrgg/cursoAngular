import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent {

  //126. Inyectar el servicio autservice y de Router
  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  //125. Crear el metodo onlogin
  onLogin():void {
    this.authService.login('token','agarga.ahahah.hdhdhdh')
    .subscribe(user =>{
      this.router.navigate(['/']);
    })
  }


}
