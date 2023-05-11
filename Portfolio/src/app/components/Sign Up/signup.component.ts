
import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import  {Usuario} from 'src/app/Modelo/Usuario';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Long from 'long';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit{
  form:FormGroup;
  usuarios: Usuario[] = [];
  constructor(private formBuilder:FormBuilder, private service:AutenticacionService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
      id: Number,
      user:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mail:['',[Validators.required,Validators.email]],
      offers:['',[Validators.required]],
      terms:['',[Validators.required]],
      }
    )
  }
  ngOnInit(): void {
  console.log(this.form);
    }
    get user(){
      return this.form.get('user');
    }
    get mail(){
      return this.form.get('mail');
    }
    get password(){
      return this.form.get('password');
    }
    get terms(){
      return this.form.get('terms');
    }
    async onSignUp(form: Usuario){
    await this.service.SignUp(form)
    };
  }


