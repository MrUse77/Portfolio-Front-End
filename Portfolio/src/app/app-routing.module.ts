import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SesionComponent } from './components/sesion/sesion.component';

const routes: Routes = [
  {path: 'home', component:AppComponent},
  {path: 'sesion', component:SesionComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'educacion', component:EducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
