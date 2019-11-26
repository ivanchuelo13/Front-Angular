export class Solicitud {
    idSolicitud:number;
    fecha_solicitud:Date;
	fecha_programada:Date;
    laboratorio:string="";
    bloque:string= "";
    asignatura:string = "";
    docente:string = "";
    practica:string = "";
    facultad:string = "";
    maquinas:boolean= false;
    cantidad_maquinas:number = 0;
    material:boolean= false;
    cantidad_material:number =0;
    ayuda_auxiliar:boolean=false;
    estudiantes:number = 0;
    observaciones:string ="";
    hora_entrada:string= "";
    hora_salida:string = "";
    estado_solicitud:string ="";
}