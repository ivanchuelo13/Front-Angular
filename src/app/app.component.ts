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


}
