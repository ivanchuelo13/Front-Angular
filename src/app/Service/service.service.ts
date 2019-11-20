import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Facultad } from '../Modelo/Facultad'
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  //Cambiar los puertos en el backend  no dejar los 8080
  UrlMysql= 'http://localhost:10010/personas';
  UrlMongo ='http://localhost:10020/api/facultades';


  //Crud Basico en Mongo
  getFacultadesMongo(){
    return this.http.get<Facultad[]>(this.UrlMongo);
  }

  createFacultadesMongo(facultad:Facultad){
    return this.http.post<Facultad[]>(this.UrlMongo+"/create", facultad)
  }

  getFacultadId(id:Number){
    return this.http.get<Facultad>(this.UrlMongo+"/"+id);
  }

  updateFacultad(facultad:Facultad){
    return this.http.put<Facultad>(this.UrlMongo+"/"+facultad.id ,facultad);
  }

  deleteFacultad(facultad:Facultad){
    return this.http.delete<Facultad>(this.UrlMongo+"/"+facultad.id);
  }


  //Crud Basico en Mysql
  getPersonas(){
    var prueba= this.UrlMysql;
    return this.http.get<Persona[]>(this.UrlMysql);   
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.UrlMysql, persona);
  }

  getPersonaId(id:Number){
    return this.http.get<Persona>(this.UrlMysql+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.UrlMysql+"/"+persona.id ,persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.UrlMysql+"/"+persona.id);
  }
  
}
