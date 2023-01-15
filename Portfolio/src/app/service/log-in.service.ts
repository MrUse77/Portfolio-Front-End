import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SesionComponent } from '../components/sesion/sesion.component';
import { Login } from '../login';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private apiUrl = 'http://localhost:5000/sesion'

  constructor(
    private http:HttpClient
  ) { }
  getCredentials(): Observable<Login[]>{
    return this.http.get<Login[]>(this.apiUrl);
  }
  addCredentials(newUsuario: Login): Observable<Login>{
    return this.http.post<Login>(this.apiUrl, newUsuario, HttpOptions)
  }
}
