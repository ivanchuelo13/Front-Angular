import { Component, OnInit } from '@angular/core';
import { Bloque } from 'src/app/Modelo/Bloque';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.css']
})
export class EditBlockComponent implements OnInit {

  bloque:Bloque = new Bloque();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();

  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getBloqueId(id).subscribe(data=>{
      this.bloque=data;
    })
  }

  ActualizarB(bloque:Bloque){
    this.service.updateBloque(bloque).subscribe(data=>{
      this.bloque=data;
      alert("Se actualizo correctamente el bloque");
      this.router.navigate(["list-block"]);
    })
  }
}
