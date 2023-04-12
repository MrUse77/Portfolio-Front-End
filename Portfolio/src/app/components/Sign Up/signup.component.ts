
import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit{
  form:FormGroup;
  usuarios: Usuario[] = [];
  constructor(private formBuilder:FormBuilder, private service:AutenticacionService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
      user:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mail:['',[Validators.required,Validators.email]],
      offers:['',[Validators.required]],
      terms:['',[Validators.required]]
      
      }
    )
  }
  
  ngOnInit(): void {
    this.service.iniciarSesion().subscribe(data=>{
    console.log(data);
  })
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
    onSignUp(form:Usuario){
      this.service.SignUp(form).subscribe(data2=>{
        console.log(data2);
      });
    }
  }


