import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route } from '@angular/router';

import {provideClientHydration} from '@angular/platform-browser';
import { routes } from './app.routes';
import { authInterceptor } from './auth/auth.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
const APIREQRES:any=''
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
    provideAnimations(),
    {provide: 'APIREQRES', useValue:'https://reqres.in/api/users'},
    provideClientHydration() 
]
};
