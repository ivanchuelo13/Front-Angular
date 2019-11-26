import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Solicitud } from '../Modelo/Solicitud';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.css']
})
export class AutorizacionComponent implements OnInit {
  solicitudes: Solicitud[];
  solicitud:Solicitud = new Solicitud();

  idbuscar: number;
  constructor(private router:Router,private servicesService: ServiceService) { }
  ngOnInit() {  
    this.servicesService.getSolicitudes().subscribe(datos => {this.solicitudes = datos; console.log(datos)});
  }
  getBuscar() {
    if (this.idbuscar == null)
    {
      this.servicesService.getSolicitudes().subscribe(datos => {this.solicitudes = datos; console.log(datos)});
    }
    else
    {
      this.servicesService.getSolicitud(this.idbuscar).subscribe(datos => {this.solicitudes[0] = datos; console.log(datos)});
    }
  }
  aprobar(solicitud:Solicitud):void {
    localStorage.setItem("idSolicitud", solicitud.idSolicitud.toLocaleString());
    this.servicesService.aprobarSolicitud(solicitud).subscribe(data=>{
      solicitud=data;
      alert("Se aprobo correctamente el bloque");
    })
  }
  rechazar(solicitud:Solicitud):void {
    localStorage.setItem("idSolicitud", solicitud.idSolicitud.toLocaleString());
    this.servicesService.rechazarSolicitud(solicitud).subscribe(data=>{
      solicitud=data;
      alert("Se rechazo correctamente el bloque");
    })
  }  
}
