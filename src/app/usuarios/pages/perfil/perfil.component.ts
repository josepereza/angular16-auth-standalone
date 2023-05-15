import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  usuariosService=inject(UsuariosService)
  ngOnInit(): void {
    this.usuariosService.getPerfil().subscribe(data=>{
      console.log(data)
    })
  }

}
