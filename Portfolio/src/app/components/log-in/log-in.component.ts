import { TypeofExpr } from '@angular/compiler';
import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
>>>>>>> develop
import { Router } from '@angular/router';
import  {Usuario} from 'src/app/Modelo/Usuario';
import { UsuarioLogin } from 'src/app/Modelo/UsuarioLogin';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
<<<<<<< HEAD
=======
>>>>>>> 0f1035e79c3aaef1443053f11f9a60218c258dd6
=======
>>>>>>> develop

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
<<<<<<< HEAD
<<<<<<< HEAD
  usuarios: Usuario[] | undefined;
=======
  usuarios: UsuarioLogin = {
    user:'',
    password:''
  };
>>>>>>> develop
  form:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private service:AutenticacionService, private ruta:Router){
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
      .subscribe(response =>{
        this.ruta.navigate(['/'])
      })
    }
    get user(){
      return this.form.get('user');
    }
    get password(){
      return this.form.get('password');
    }
  
<<<<<<< HEAD
=======

>>>>>>> 0f1035e79c3aaef1443053f11f9a60218c258dd6
=======
>>>>>>> develop
}
