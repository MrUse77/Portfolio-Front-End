export class Trabajo {
    id: number;
    nombreEmpresa: string;
    descripcion:   string;
    fechaInicio:   Date ;
    fechaFin:      Date ;
    logo:          string;
    persona:       Persona;
    tipo_Trabajo:  TipoTrabajo;
    selected: boolean = false;
    edit: boolean = false;
    constructor() {
        this.id = 0; // Asignamos un valor por defecto a la propiedad 'id'
        this.nombreEmpresa = '';
        this.descripcion = '';
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
        this.logo ='';
        this.persona={
            id:'',
            user:'',
            mail:'',
            password:'',
            genero:   false,
            offers:   false,
            terms:    true
        };
        this.tipo_Trabajo={
            id:0,
            rol:'',
        };
    };
}
export interface Persona {
    id:       string;
    user:     string;
    mail:     string;
    password: string;
    genero:   boolean;
    offers:   boolean;
    terms:    boolean;
}
export interface TipoTrabajo {
    id:  number;
    rol: string;
}

