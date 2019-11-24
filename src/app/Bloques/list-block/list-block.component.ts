import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/Modelo/Bloque';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.css']
})
export class ListBlockComponent implements OnInit {

  bloques:Bloque[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
     this.service.getBloquesMongo().subscribe(data=>{this.bloques=data;})
  }
 
  VistaInsertB(){
    this.router.navigate(["nuevo-block"]);
  }


  Editar(bloque:Bloque): void {
    localStorage.setItem("id", bloque.id.toLocaleString());
    this.router.navigate(["edit-block"]);
  }

  
  Delete(bloque:Bloque){
    this.service.deleteBloque(bloque).subscribe(data=>{
      this.bloques= this.bloques.filter(p=>p!==bloque);
      alert("Se borro el bloque correctamente");
    })
  }

}
