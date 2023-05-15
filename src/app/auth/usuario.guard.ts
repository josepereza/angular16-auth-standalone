import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const usuarioGuard = () => {

  const router = inject(Router);
  const authService=inject(AuthService)
  if(!authService.isLoggedIn){
  router.navigate(['login'])
  return false}
else
  return true
};
