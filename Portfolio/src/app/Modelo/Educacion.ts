export interface Educacion {
    id:              number;
    nombreEducacion: string;
    titulo:          string;
    fechaInicio:     Date;
    fechaFin:        Date;
    logo:            Blob;
    tipo_Educacion:  TipoEducacion;
    persona:         Persona;
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

export interface TipoEducacion {
    id:          number;
    nombre_tipo: string;
}
