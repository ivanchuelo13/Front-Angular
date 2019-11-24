import { Component, OnInit } from '@angular/core';
import { Laboratorio } from 'src/app/Modelo/Laboratorio';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-new-lab',
  templateUrl: './new-lab.component.html',
  styleUrls: ['./new-lab.component.css']
})
export class NewLabComponent implements OnInit {

  laboratorio:Laboratorio = new Laboratorio();
  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit() {
  }

  GuardarL(){
    this.service.createLaboratorioMongo(this.laboratorio).subscribe(data=>{
      alert("Se Agrego un nuevo laboratorio");
      this.router.navigate(["list-lab"]);
    })  
  }
}
