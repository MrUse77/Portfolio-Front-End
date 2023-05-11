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
}

export interface TipoEducacion {
    id:          number;
    nombre_tipo: string;
}
