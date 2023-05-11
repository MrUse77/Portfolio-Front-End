import { APP_INITIALIZER, NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHandler } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortfolioService } from './service/portfolio.service';
import { SignUpComponent } from './components/Sign Up/signup.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { ToastrModule } from 'ngx-toastr';


export function LoadConfiguration(configservice: PortfolioService){
    return() => configservice.loadConfig();
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignUpComponent,
        ProyectosComponent,
        ExperienciaComponent,
        EducacionComponent,
        FooterComponent,
        LogInComponent,
        HeaderComponent,
    ],
    providers: [
        PortfolioService, 
        {
            provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,
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
        ReactiveFormsModule,
        ToastrModule.forRoot({      positionClass: 'toast-top-right',
        preventDuplicates: true,}), 
    ]
})
export class AppModule {
    HomeComponent: any;
}
