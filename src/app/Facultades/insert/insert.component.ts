import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Facultad } from 'src/app/Modelo/Facultad';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  facultad:Facultad  = new Facultad();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {   
  }

  Guardar(){
    this.service.createFacultadesMongo(this.facultad).subscribe(data=>{
    alert("Se Inserto Correctamente"); 
    this.router.navigate(["lista"]);
   })
 }

}
