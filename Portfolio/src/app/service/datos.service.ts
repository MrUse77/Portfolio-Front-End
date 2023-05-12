import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajo } from '../Modelo/Trabajo';
import { Educacion, TipoEducacion } from '../Modelo/Educacion';
import { TipoTrabajo } from '../Modelo/TipoTrabajo';
import { Observable, async } from 'rxjs';
import { Proyectos } from '../Modelo/Proyectos';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  exp: Trabajo[] = [];
  urlApi = "https://portfolio-fwdy.onrender.com";
  constructor(private http:HttpClient,) { 
  }
  DatosPersonas(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlApi+"/personas/traer");
  }
    //funciones trabajo
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
  EditarTrabajo=async(id:number, Trabajo:Trabajo)=>{
    const response = await fetch(`${this.urlApi}/trabajos/editar/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Trabajo),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar los datos');
    }
    const resultado = await response.json();
    return resultado;
  }
    //funciones educacion
  DatosEducacion(){
    return this.http.get<Educacion[]>(this.urlApi+"/educacion/traer");
  }
  CrearEducacion(form: Educacion){
    let direccion = this.urlApi+"/educacion/crear"
    return this.http.post(direccion,form,{responseType:'text'});
  }
  tipoE(){
    return this.http.get<TipoEducacion[]>(this.urlApi+"/tipoeducacion/traer");
  }
  EditarEducacion=async(id:number, Educacion:Educacion)=>{
    const response = await fetch(`${this.urlApi}/educacion/editar/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Educacion),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar los datos');
    }
    const resultado = await response.json();
    return resultado;
  }
    //funciones proyectos
  DatosProyectos(){
    return this.http.get<Proyectos[]>(this.urlApi+"/proyectos/traer");
  }
  CrearProyectos(form: Proyectos){
    let direccion = this.urlApi+"/proyectos/crear"
    return this.http.post(direccion, form,{responseType: 'text'});
  }
  EditarProyecto=async(id:number, Proyectos:Proyectos)=>{
    const response = await fetch(`${this.urlApi}/proyectos/editar/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Proyectos),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar los datos');
    }
    const resultado = await response.json();
    return resultado;
  }
}
