import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

   Acceder(){
    this.router.navigate(["inicio"])
  }


  ListarUsuarios(){
    this.router.navigate(["list-user"]);
  }

  ListarFacultades(){
    this.router.navigate(["lista"])
  }

  ListarBloques(){
    this.router.navigate(["list-block"])
  }

  ListarLaboratorios(){
    this.router.navigate(["list-lab"])
  }

  Solicitar(){
    this.router.navigate(["solicitudsala"])
  }

  Miguel(){
    this.router.navigate(["autorizacion"])
  }


}
