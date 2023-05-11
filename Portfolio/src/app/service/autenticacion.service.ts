import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import  {Usuario}  from '../Modelo/Usuario';
import { UsuarioLogin } from '../Modelo/UsuarioLogin';
import { ToastrService } from 'ngx-toastr';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  urlApi="https://portfolio-fwdy.onrender.com"
  constructor(private http:HttpClient, private toastr:ToastrService) { 
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
  async SignUp(form: Usuario){
  let direccion = this.urlApi+"/personas/crear"
  try{
    const response = await fetch(`${direccion}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    return data;
  }catch(error){
    this.toastr.error("Login Failed");
  }
  }
}
