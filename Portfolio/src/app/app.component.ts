import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortfolioService } from './service/portfolio.service';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> 0f1035e79c3aaef1443053f11f9a60218c258dd6


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  susbcription?: Subscription;

constructor(
  private PortfolioService: PortfolioService,
<<<<<<< HEAD
  private router: Router,
  private http:HttpClient
=======
  private router: Router
>>>>>>> 0f1035e79c3aaef1443053f11f9a60218c258dd6
){

}

ngOnInit(): void {
}
toggleInterface(){
  this.PortfolioService.toggleInterface();
}
hasRoute(route: string){
  return this.router.url == route
}
}
