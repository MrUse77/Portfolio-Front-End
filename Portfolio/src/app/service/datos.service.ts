import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajo } from '../Modelo/Trabajo';
import { TipoTrabajo } from '../Modelo/TipoTrabajo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  iniciarSesion() {
    throw new Error('Method not implemented.');
  }
  exp: Trabajo[] = [];
  urlApi="http://localhost:8080"
  constructor(private http:HttpClient) { 
    console.log("todo ok");
  }
  DatosTrabajo(){
    return this.http.get<Trabajo[]>(this.urlApi+"/trabajos/traer");
  }
  CrearTrabajo(form: Trabajo){
    let direccion = this.urlApi+"/trabajos/crear"
    return this.http.post(direccion, form,{responseType: 'text'});
  }
  tipoT(){
    return this.http.get<TipoTrabajo[]>(this.urlApi+"/tipotrabajo/traer");
  }
  EditarTrabajo(id: number, nombreEmpresa: string, descripcion: string, fechaInicio: Date, fechaFin:Date, logo: string, tipo_Trabajo: TipoTrabajo): Observable<any>{
    const url = `${this.urlApi}/trabajos/editar/${id}?nombreEmpresa=${nombreEmpresa}&descripcion=${descripcion}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&logo=${logo}&tipo_Trabajo=${tipo_Trabajo}`;
    return this.http.put(url, null);
  }
}
