import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { tap } from "rxjs";
import { AuthService } from "./auth.service";
 
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request', req.method, req.url);
  console.log('authInterceptor')
     // ejemplo de api  
  if (req.url.startsWith('http://localhost:3000/auth')) {
    const authService=inject(AuthService)
    const authToken = authService.getToken();
    // Setting a dummy token for demonstration
    const headers = req.headers.set('Authorization', 'Bearer Auth-1234567');
    req = req.clone({headers});
  }
 
  return next(req).pipe(
    tap(resp => console.log('response', resp))
  );
}