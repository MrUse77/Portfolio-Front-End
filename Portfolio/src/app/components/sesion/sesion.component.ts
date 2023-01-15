import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Router } from 'express-serve-static-core';
import { Subscription } from 'rxjs';
import { Login } from 'src/app/login';
import { LogInService } from 'src/app/service/log-in.service';
import { PortfolioService } from '../../service/portfolio.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit{
 

  constructor(
    private sesion: LogInService,  
  ){}
  ngOnInit(): void {
    
  }
  }