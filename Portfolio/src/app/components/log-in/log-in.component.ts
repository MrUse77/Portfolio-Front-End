import { TypeofExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import  {Usuario} from 'src/app/Modelo/Usuario';
import { UsuarioLogin } from 'src/app/Modelo/UsuarioLogin';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  usuarios: UsuarioLogin = {
    user:'',
    password:''
  };
  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private service:AutenticacionService, private ruta:Router, private toast:ToastrService){
    this.form=this.formBuilder.group(
      {
      user:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(5)]],
      }
      )
  }

  ngOnInit(): void {
    }
    Login(form: NgForm){
      this.service.IniciarSesion(this.usuarios)
      .subscribe(() =>{
        this.toast.success(`Login Correcto`)
        this.ruta.navigate(['/'])
      }), (error: any) =>{
        console.error
        this.toast.error(`Login Incorrecto`,error)
      }
    }
    get user(){
      return this.form.get('user');
    }
    get password(){
      return this.form.get('password');
    }
  
}
