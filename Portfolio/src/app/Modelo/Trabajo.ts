export interface Trabajo {
    id:            number;
    nombreEmpresa: string;
    descripcion:   string;
    fechaInicio:   Date;
    fechaFin:      Date;
    logo:          string;
    persona:       Persona;
    tipo_Trabajo:  TipoTrabajo;
}

export interface Persona {
    id:       number;
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

