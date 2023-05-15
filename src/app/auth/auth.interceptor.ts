import { HttpInterceptorFn } from "@angular/common/http";
import { Inject, inject, Injector } from "@angular/core";
import { tap } from "rxjs";
import { AuthService } from "./auth.service";


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  
  console.log('request', req.method, req.url);
 
     // ejemplo de api  
  if (req.url.startsWith(inject(AuthService).Apiurl)) {
    const authService=inject(AuthService)
    const authToken = authService.getToken();
    // Setting a dummy token for demonstration
    const headers = req.headers.set('Authorization', `Bearer ${authToken}`);
    req = req.clone({headers});
  }
 
  return next(req).pipe(
    tap(resp => console.log('response', resp))
  );
}