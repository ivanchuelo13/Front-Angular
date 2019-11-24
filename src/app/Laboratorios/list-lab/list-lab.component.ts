import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/Modelo/Laboratorio';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-lab',
  templateUrl: './list-lab.component.html',
  styleUrls: ['./list-lab.component.css']
})
export class ListLabComponent implements OnInit {

  laboratorios:Laboratorio[]
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getLaboratoriosMongo().subscribe(data=>{this.laboratorios=data;})
  }

  VistaInsertL(){
    this.router.navigate(["new-lab"]);
  }

  Editar(laboratorio:Laboratorio): void {
    localStorage.setItem("id", laboratorio.id.toLocaleString());
    alert(laboratorio.id)
    this.router.navigate(["new-lab"]);
  }

  Delete(laboratorio:Laboratorio){
    this.service.deleteLaboratorio(laboratorio).subscribe(data=>{
      this.laboratorios= this.laboratorios.filter(p=>p!==laboratorio);
      alert("Se borro el laboratorio correctamente");
    })
  }


}
