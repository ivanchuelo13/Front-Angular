import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Front-Angular';
  constructor(private router:Router) { }

  ngOnInit() {
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



}
