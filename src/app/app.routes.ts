import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/pages/login/login.component';
import { usuarioGuard } from './auth/usuario.guard';
import { ElementComponent } from './components/element/element.component';
import { ListadoUsuariosComponent } from './usuarios/pages/listado-usuarios/listado-usuarios.component';
import { PerfilComponent } from './usuarios/pages/perfil/perfil.component';

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
      {
        path: 'usuarios',
        component: ListadoUsuariosComponent
        
      },
      {
        path: 'perfil',
        component: PerfilComponent,
        canActivate: [usuarioGuard]
               },

];
