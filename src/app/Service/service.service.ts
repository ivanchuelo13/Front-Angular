import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Facultad } from '../Modelo/Facultad'
import { Observable  } from 'rxjs';
import { Bloque } from '../Modelo/Bloque';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  //Cambiar los puertos en el backend  no dejar los 8080
  UrlMysql= 'http://localhost:10010/personas';
  UrlMongoF ='http://localhost:10020/api/facultades';
  UrlMongoB = 'http://localhost:10020/api/bloques'


  //Crud Basico en Mongo Facultades

  getFacultadesMongo(){
    return this.http.get<Facultad[]>(this.UrlMongoF);
  }

  createFacultadesMongo(facultad:Facultad){
    return this.http.post<Facultad[]>(this.UrlMongoF+"/create", facultad);
  }

  getFacultadId(id:String){
    alert("La del servicio "+id)
    return this.http.get<Facultad>(this.UrlMongoF+"/"+id);
  }

  updateFacultad(facultad:Facultad){
    return this.http.put<Facultad>(this.UrlMongoF+"/"+facultad.id ,facultad);
  }

  deleteFacultad(facultad:Facultad){
    return this.http.delete<Facultad>(this.UrlMongoF+"/"+facultad.id);
  }


  //Crud Basico Mongo Bloques

  getBloquesMongo(){
     return this.http.get<Bloque[]>(this.UrlMongoB);
  }

  createBloqueMongo(bloque:Bloque){
    return this.http.post<Bloque[]>(this.UrlMongoB+"/create",bloque);
  }

  getBloqueId(id:String){
    alert("La del servicio "+id)
    return this.http.get<Bloque>(this.UrlMongoB+"/"+id);
  }

  updateBloque(bloque:Bloque){
    return this.http.put<Bloque>(this.UrlMongoB+"/"+bloque.id , bloque);
  }

  deleteBloque(bloque:Bloque){
    return this.http.delete<Bloque>(this.UrlMongoB+"/"+bloque.id);
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
