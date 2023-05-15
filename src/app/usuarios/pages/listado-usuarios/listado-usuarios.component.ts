import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

usuariosService=inject(UsuariosService)
ngOnInit(): void {
 this.usuariosService.getUsuarios().subscribe(data=>{
  console.log(data)
 })
}

}
