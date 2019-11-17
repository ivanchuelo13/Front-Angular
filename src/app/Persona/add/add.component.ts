import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(persona:Persona){
     this.service.createPersona(persona).subscribe(data=>{
     alert("Se Inserto Correctamente"); 
     this.router.navigate(["listar"]);
    })
  }

}
