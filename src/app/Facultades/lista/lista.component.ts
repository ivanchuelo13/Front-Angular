import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service';
import {Router} from '@angular/router';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  facultades:Facultad[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getFacultadesMongo().subscribe(data=>{this.facultades=data;})
  }

  VistaInsertF(){
    this.router.navigate(["insert"]);
  }

 //Capturar Id para enviarlo a la otra vista 
  Editar(facultad:Facultad):void{
   localStorage.setItem("id", facultad.id.toLocaleString());
   this.router.navigate(["update"]);
  }

  Delete(facultad:Facultad){
    this.service.deleteFacultad(facultad).subscribe(data=>{
      this.facultades= this.facultades.filter(p=>p!==facultad);
      alert("Se borro la facultad correctamente");
    })
  }
}
