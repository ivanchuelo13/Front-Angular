import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/Modelo/Bloque';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-nuevo-block',
  templateUrl: './nuevo-block.component.html',
  styleUrls: ['./nuevo-block.component.css']
})
export class NuevoBlockComponent implements OnInit {

  bloque:Bloque = new Bloque();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  GuardarB(){
    this.service.createBloqueMongo(this.bloque).subscribe(data=>{
      alert("Se Agrego un nuevo Bloque");
      this.router.navigate(["list-block"])
    })
  }
}
