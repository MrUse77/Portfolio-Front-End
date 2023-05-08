import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import  {Usuario}  from '../Modelo/Usuario';
import { UsuarioLogin } from '../Modelo/UsuarioLogin';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  urlApi="http://localhost:8080"
  constructor(private http:HttpClient) { 
    console.log("todo ok");
  }
  
  IniciarSesion(Form: UsuarioLogin){
    return this.http.post<Usuario[]>(this.urlApi+"/login",Form,{
      observe:'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');
      localStorage.setItem('token', token);
      return body;
    }))
  }
  getToken(){
    return localStorage.getItem('token');
  }
  SignUp(form: Usuario){
  let direccion = this.urlApi+"/personas/crear"
  return this.http.post(direccion, form,{responseType: 'text'});
  }
}
