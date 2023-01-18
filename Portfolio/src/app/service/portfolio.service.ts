import { HttpClient,HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  datos: any;
constructor (
    private http: HttpClient ){}
loadConfig(): Promise<any> {
    return this.http.get('assets/config.json').pipe(
      tap (data => {
        console.log(data);
        this.datos = data;
      })
    ).toPromise();
} 
private showSesion: boolean = false;
private subject = new Subject<any>();
toggleInterface():void{
    this.showSesion = !this.showSesion;
    this.subject.next(this.showSesion);
}

ontoggle(): Observable<any>{
    return this.subject.asObservable();
}

  
  
  
  
  
}
