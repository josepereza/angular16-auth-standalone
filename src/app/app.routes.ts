import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/pages/login/login.component';
import { ElementComponent } from './components/element/element.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'login', pathMatch:'full'
        
      },
    {
        path: 'element',
        component: ElementComponent,
        canActivate: [
          () => inject(AuthService).isLoggedIn
        ]
      },
      {
        path: 'login',
        component: LoginComponent,
        
      },

];
