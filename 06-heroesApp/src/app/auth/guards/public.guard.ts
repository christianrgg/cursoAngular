import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap, map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';



const checkAuthStatus = (): boolean | Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigate(['./']);
      }
    }),
    map(isAuthenticated => !isAuthenticated)
  );

};


export const canActivatePublic: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkAuthStatus();
};

export const canMatchPublic: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuthStatus();
};

