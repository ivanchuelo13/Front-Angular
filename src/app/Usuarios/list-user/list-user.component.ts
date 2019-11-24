import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuarios';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  usuarios:Usuario[]
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUsuario().subscribe(data=>{
      this.usuarios=data;
    })
  }

  VistaInsertU(){
    this.router.navigate(["new-user"]);
  }

  Editar(usuario:Usuario): void {
    localStorage.setItem("id", usuario.idusuarios.toString());
    this.router.navigate(["edit-user"]);
  }

  Delete(usuario:Usuario){
    this.service.deleteUsuario(usuario).subscribe(data=>{
      this.usuarios= this.usuarios.filter(p=>p!==usuario);
      alert("Se borro el usuario correctamente");
    })
  }

}

