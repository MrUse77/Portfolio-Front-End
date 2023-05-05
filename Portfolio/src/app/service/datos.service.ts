import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajo } from '../Modelo/Trabajo';
import { Educacion, TipoEducacion } from '../Modelo/Educacion';
import { TipoTrabajo } from '../Modelo/TipoTrabajo';
import { Observable, async } from 'rxjs';
import { Proyectos } from '../Modelo/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  iniciarSesion() {
    throw new Error('Method not implemented.');
  }
  exp: Trabajo[] = [];
  urlApi="http://localhost:8080";
  constructor(private http:HttpClient,) { 
    console.log("todo ok");
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
    console.log('id:', id);
    console.log('Trabajo:', Trabajo);
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
    console.log(resultado);
    return resultado;
  }
  //funciones educacion
  DatosEducacion(){
    return this.http.get<Educacion[]>(this.urlApi+"/educacion/traer");
  }
  CrearEducacion(form: Educacion){
    let direccion = this.urlApi+"/educacion/crear"
    return this.http.post(direccion, form,{responseType: 'text'});
  }
  tipoE(){
    return this.http.get<TipoEducacion[]>(this.urlApi+"/tipoeducacion/traer");
  }
  EditarEducacion=async(id:number, Educacion:Educacion)=>{
    console.log('id:', id);
    console.log('proyectos:', Educacion);
    const response = await fetch(`http://localhost:8080/educacion/editar/${id}`,{
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
    console.log(resultado);
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
    console.log('id:', id);
    console.log('proyectos:', Proyectos);
    const response = await fetch(`http://localhost:8080/proyectos/editar/${id}`,{
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
    console.log(resultado);
    return resultado;
  }

}
