export interface Trabajo {
    id: number;
    nombreEmpresa: string; 
    descripcion:   string ;
    fechaInicio:   Date  ;
    fechaFin:      Date ;
    logo:          string ;
    persona:       Persona ;
    tipoTrabajo: TipoTrabajo;
    selected: boolean;
    edit: boolean;
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

