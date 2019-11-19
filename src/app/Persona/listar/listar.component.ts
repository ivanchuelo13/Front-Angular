import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[];
  
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
     this.service.getPersonas().subscribe(data=>{this.personas=data;})
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){
    console.log()
    this.service.deletePersona(persona).subscribe(data=>{
      this.personas= this.personas.filter(p=>p!==persona);
      alert("Se borro el usuario");
    })
  }
}
