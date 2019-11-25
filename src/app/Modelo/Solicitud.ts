export class Solicitud {
    idSolicitud:number;
    fecha_solicitud:Date;
	fecha_programada:Date;
    laboratorio:string;
    bloque:string;
    asignatura:string;
    docente:string;
    practica:string;
    facultad:string;
    maquinas:boolean;
    cantidad_maquinas:number;
    material:boolean;
    cantidad_material:number;
    ayuda_auxiliar:boolean;
    estudiantes:number;
    observaciones:string;
    hora_entrada:string;
    hora_salida:string;
    estado_solicitud:string;
}