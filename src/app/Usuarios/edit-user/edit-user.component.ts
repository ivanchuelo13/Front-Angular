import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuarios';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit() {
  this.Editar();
  }

  Editar(){
    let idusuarios = localStorage.getItem("id");
    this.service.getUsuarioId(+idusuarios).subscribe(data=>{
      this.usuario=data;
    })
  }

  ActualizarU(usuario:Usuario){
    this.service.updateUsuario(usuario).subscribe(data=>{
      this.usuario=data;
      alert("Usuario Actualizado Correctamente GRACIAS!");
      this.router.navigate(["list-user"]);
    })
  }

}

