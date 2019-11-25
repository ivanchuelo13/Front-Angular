import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Facultad } from '../Modelo/Facultad';
import { Observable  } from 'rxjs';
import { Bloque } from '../Modelo/Bloque';
import { Laboratorio } from '../Modelo/Laboratorio';
import { Usuario } from '../Modelo/Usuarios';
import { Solicitud } from '../Modelo/Solicitud';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  //Cambiar los puertos en el backend  no dejar los 8080
  UrlMysql= 'http://localhost:10010/usuario';
  UrlMongoF ='http://localhost:10020/api/facultades';
  UrlMongoB = 'http://localhost:10020/api/bloques';
  UrlMongoL = 'http://localhost:10020/api/laboratorios';
  UrlPostgrest = 'http://localhost:9001/Solicitudes';



  //MIGUEL POSTGREST
  getSolicitudes(){
    return this.http.get<Solicitud[]>(this.UrlPostgrest);
  }
  getSolicitud(id:number){
    return this.http.get<Solicitud>(this.UrlPostgrest+'/'+id);
  }
  aprobarSolicitud(solicitud:Solicitud){
    return this.http.put<Solicitud>(this.UrlPostgrest+'/aprobar/'+solicitud.idSolicitud, solicitud);
  }
  rechazarSolicitud(solicitud:Solicitud){
    return this.http.put<Solicitud>(this.UrlPostgrest+'/rechazar/'+solicitud.idSolicitud, solicitud);
  }



  //Crud Basico en Mongo Facultades

  getFacultadesMongo(){
    return this.http.get<Facultad[]>(this.UrlMongoF);
  }

  createFacultadesMongo(facultad:Facultad){
    return this.http.post<Facultad[]>(this.UrlMongoF+"/create", facultad);
  }

  getFacultadId(id:String){
    alert("EL ID==> "+id+ " Llego al servicio")
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
    alert("EL ID==> "+id+ " Llego al servicio")
    return this.http.get<Bloque>(this.UrlMongoB+"/"+id);
  }

  updateBloque(bloque:Bloque){
    return this.http.put<Bloque>(this.UrlMongoB+"/"+bloque.id , bloque);
  }

  deleteBloque(bloque:Bloque){
    return this.http.delete<Bloque>(this.UrlMongoB+"/"+bloque.id);
  }


   //Crud Basico Mongo Laboratorios

  getLaboratoriosMongo(){
    return this.http.get<Laboratorio[]>(this.UrlMongoL);
 }

 createLaboratorioMongo(laboratorio:Laboratorio){
   return this.http.post<Laboratorio>(this.UrlMongoL+"/create",laboratorio);
 }

 getLaboratorioId(id:String){
  alert("EL ID==> "+id+ " Llego al servicio")
   return this.http.get<Laboratorio>(this.UrlMongoL+"/"+id);
 }

 updateLaboratorio(laboratorio:Laboratorio){
   return this.http.put<Laboratorio>(this.UrlMongoL+"/"+laboratorio.id , laboratorio);
 }

 deleteLaboratorio(laboratorio:Laboratorio){
   return this.http.delete<Laboratorio>(this.UrlMongoL+"/"+laboratorio.id);
 }

 //Crud Basico en Mysql
 getUsuario(){
  var prueba= this.UrlMysql;
  return this.http.get<Usuario[]>(this.UrlMysql);   
}

createUsuario(usuario:Usuario){
  return this.http.post<Usuario>(this.UrlMysql, usuario);
}

getUsuarioId(idusuarios:Number){
  alert(idusuarios);
  return this.http.get<Usuario>(this.UrlMysql+"/"+idusuarios);
}

updateUsuario(usuario:Usuario){
  return this.http.put<Usuario>(this.UrlMysql+"/"+usuario.idusuarios ,usuario);
}

deleteUsuario(usuario:Usuario){
  return this.http.delete<Usuario>(this.UrlMysql+"/"+usuario.idusuarios);
}  
  
}
