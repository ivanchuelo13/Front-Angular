import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuarios';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  GuardarU(){
    this.service.createUsuario(this.usuario).subscribe(data=>{
      alert("Se agrega el usuario correctamente!");
      this.router.navigate(["list-user"]);
    })
  }

}