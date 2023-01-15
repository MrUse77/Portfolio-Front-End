import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpHandler } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioService } from './service/portfolio.service';
import { SesionComponent } from './components/sesion/sesion.component';

import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';


export function LoadConfiguration(configservice: PortfolioService){
    return() => configservice.loadConfig();
}

@NgModule({
    declarations: [
        AppComponent,
        EncabezadoComponent,

         SesionComponent,
         ProyectosComponent,
         ExperienciaComponent,
         EducacionComponent,
    ],
    providers: [
        PortfolioService, 
        {
            provide: APP_INITIALIZER,
            useFactory: LoadConfiguration,
            deps: [PortfolioService],
            multi: true,
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
    ]
})
export class AppModule { }
