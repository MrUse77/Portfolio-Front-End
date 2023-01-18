import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SignUpComponent } from './components/Sign Up/signup.component';

const routes: Routes = [
  {path: 'home', component:AppComponent},
  {path: 'SignUp', component:SignUpComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'LogIn', component:LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
