export interface Educacion {
    id:              number;
    fechaInicio:     Date;
    nombreEducacion: string;
    logo:            string;
    fechaFin:        Date | null;
    titulo:          string;
    tipo_Educacion:  TipoEducacion;
    persona:         Persona;
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

export interface TipoEducacion {
    id:          number;
    nombre_tipo: string;
}
