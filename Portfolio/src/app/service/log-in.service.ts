import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { SignUpComponent } from '../components/Sign Up/signup.component';
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
}
