import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../service/autenticacion.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private service:AutenticacionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token= this.service.getToken();

    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bear ${token}`)
      })
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
