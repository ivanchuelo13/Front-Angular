import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/Modelo/Laboratorio';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.css']
})
export class EditLabComponent implements OnInit {

  laboratorio:Laboratorio = new Laboratorio();
  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    alert(id);
    this.service.getLaboratorioId(id).subscribe(data=>{
    this.laboratorio=data;
    })
  }

  ActualizarL(laboratorio:Laboratorio){
    this.service.updateLaboratorio(laboratorio).subscribe(data=>{
      this.laboratorio=data;
      alert("Se actualizo el laboratorio correctamente");
      this.router.navigate(["list-lab"]);
    })
  }

}
