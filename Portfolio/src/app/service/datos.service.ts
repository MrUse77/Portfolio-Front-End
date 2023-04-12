import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajo } from '../Modelo/Trabajo';
import { TipoTrabajo } from '../Modelo/TipoTrabajo';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  urlApi="http://localhost:8080"
  constructor(private http:HttpClient) { 
    console.log("todo ok");
  }
  Datos(){
    return this.http.get<Trabajo[]>(this.urlApi+"/trabajos/traer");
  }
  tipoT(){
    return this.http.get<TipoTrabajo[]>(this.urlApi+"/tipotrabajo/traer");
  }
  Editar(trabajo:Trabajo){
    return this.http.put<Trabajo[]>(this.urlApi+"/trabajos/editar/{id}",trabajo);
  }
}
