import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../Modelo/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  urlApi="http://localhost:8080"
  constructor(private http:HttpClient) { 
    console.log("todo ok");
  }
  iniciarSesion(){
    return this.http.get<Usuario[]>(this.urlApi+"/personas/traer");
  }
  SignUp(form:Usuario){
  let direccion = this.urlApi+"/personas/crear"
  return this.http.post(direccion, form);
  }
}
