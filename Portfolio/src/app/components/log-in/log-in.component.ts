import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  usuarios: Usuario[] | undefined;
  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private service:AutenticacionService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
      user:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      }
      )
  }

  ngOnInit(): void {
    this.service.iniciarSesion().subscribe(data=>{
      this.usuarios=data;
    })
    }
    get user(){
      return this.form.get('user');
    }
    get password(){
      return this.form.get('password');
    }
  
}
