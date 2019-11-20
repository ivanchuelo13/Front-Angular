import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/Modelo/Facultad';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  facultad: Facultad = new Facultad();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

    Editar(){
      let id=localStorage.getItem("id");
      console.log(id)
      this.service.getFacultadId(+id).subscribe(data=>{
      this.facultad=data;
    })
  }

  Actualizar(facultad:Facultad){
    this.service.updateFacultad(facultad).subscribe(data=>{
    this.facultad=data;
    alert("Se Actualizo correctamente");
    this.router.navigate(["listar"]);
    })
  }

}
