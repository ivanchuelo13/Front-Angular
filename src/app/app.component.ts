import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-Angular';

  /**
   *
   */
  constructor(private router:Router) {   
  }

  Listar(){
    this.router.navigate(["listar"]);
  }

  NuevoUser(){
    this.router.navigate(["add"]);
  }

  Editar(){
    this.router.navigate(["edit"]);
  }

  ListarFacultades(){
    this.router.navigate(["lista"])
  }

  ListarBloques(){
    this.router.navigate(["list-block"])
  }


}
