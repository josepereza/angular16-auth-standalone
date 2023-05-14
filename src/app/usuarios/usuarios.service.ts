import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http:HttpClient,
    @Inject('APIREQRES') public Apiurl:string
    ) { }

  getUsuarios(){
    return this.http.get('https://reqres.in/api/users?page=2')
  }
}
