import { Component, OnInit } from '@angular/core';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';
import { Soli } from '../Modelo/soli';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';
import { Laboratorio } from '../Modelo/Laboratorio';
import { Bloque } from '../Modelo/Bloque';
import { Facultad } from '../Modelo/Facultad';
import { Solicitud } from '../Modelo/Solicitud';

@Component({
  selector: 'app-solicitudsala',
  templateUrl: './solicitudsala.component.html',
  styleUrls: ['./solicitudsala.component.css']
})
export class SolicitudsalaComponent implements OnInit {
  
  laboratorios:Laboratorio[];
  bloques:Bloque[]; 
  facultades:Facultad[];
  solicitud:Solicitud = new Solicitud();
  public form: DynamicFormGroup<Soli>;
  constructor(private fb: DynamicFormBuilder , private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getLaboratoriosMongo().subscribe(data=>{this.laboratorios=data;})
    this.service.getBloquesMongo().subscribe(data=>{this.bloques=data;})
    this.service.getFacultadesMongo().subscribe(data=>{this.facultades=data;})
  

    this.form = this.fb.group(Soli, {
      date: new Date(), name: '', lab: '', asign: '', teacher: '', faculty: '', 
      students: '', cantMachines: '', cantConsume: '', observation: '', useMachines: false,
      useLab: false, guide: false, aux: false, useConsume: false
    });
  }

  GuardarSolicitud(){
    this.service.createSolicitudPostgrest(this.solicitud).subscribe(data=>{
      alert("Se registro la solicitud correctamente!");
      this.router.navigate(["autorizacion"]);
    })
  }
}
