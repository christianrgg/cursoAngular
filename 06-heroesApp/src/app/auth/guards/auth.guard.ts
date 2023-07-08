import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';


// 134. Crear una constante para centralizar peticiones
const checkAuthStatus = (): boolean | Observable<boolean> => {
  // 135. Se inyectan el AuthService y el Router
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  // 136. Se llama al estado de autenticación del servicio.
  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['/auth/login']);
      }
    })
  );

};


export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // 137. Se llama al valor de la constante checkAuthStatus()
  return checkAuthStatus();
};

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  // 138. Se llama al valor de la constante checkAuthStatus()
  return checkAuthStatus();
};

// El canActivate se usa para autenticación
// El canMatch se usa para verificar el rol de usuario.
