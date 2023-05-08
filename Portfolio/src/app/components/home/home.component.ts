
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuarioLogin } from 'src/app/Modelo/UsuarioLogin';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  title = 'Portfolio';
  users: Usuario[] = [];
  pro: Proyectos[] = [];
  @ViewChild ('menu') menu !: ElementRef;
  @ViewChild ('redes') redes !: ElementRef;
  @ViewChild ('contacto') contacto !: ElementRef;
  @ViewChild ('contacto2') contacto2 !: ElementRef;
  @ViewChild ('redes2') redes2 !: ElementRef;
  @ViewChild ('ocultar') ocultar !: ElementRef;
  @ViewChild ('datos') datos !: ElementRef;
  @ViewChild ('logo') logo !: ElementRef;
  @ViewChild ('lvl') lvl !: ElementRef;
  @ViewChild ('signup') signup !: ElementRef;
  @ViewChild ('login') login !: ElementRef;
  @ViewChild ('user') user !: ElementRef;
  @ViewChild ('sesion') sesion !: ElementRef;
  desc = ['Técnico electrónico y desarrollador web full stack'];
  menus=0;
  menu2=0;
  skill=0;
  redireccionar(url: any) {
    window.open(url,'_blank');
  }
  constructor(private render2: Renderer2, private service:DatosService
  ){
  }
  ngOnInit(): void {
    
    this.service.DatosPersonas().subscribe(data2 => {
      this.users = data2;
      console.log(data2);
    })
  this.service.DatosProyectos().subscribe(data => {
      this.pro = data;
      console.log(data);
    });
  }
  ngAfterViewInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const login = this.login.nativeElement;
      const signup = this.signup.nativeElement;
      const sesion = this.sesion.nativeElement; // corregido el typo
      const user = this.user.nativeElement;
      this.render2.setStyle(login, 'display', 'none');
      this.render2.setStyle(signup, 'display', 'none');
      this.render2.setStyle(sesion, 'display', 'none');
      this.render2.setStyle(user, 'display', 'block');
    } else {
      const login = this.login.nativeElement;
      const signup = this.signup.nativeElement;
      const sesion = this.sesion.nativeElement;
      const user = this.user.nativeElement;
      this.render2.setStyle(login, 'display', 'block');
      this.render2.setStyle(signup, 'display', 'block');
      this.render2.setStyle(sesion, 'display', 'block');
      this.render2.setStyle(user, 'display', 'none');
    }
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    const login = this.login.nativeElement;
    const signup = this.signup.nativeElement;
    const sesion = this.signup.nativeElement;
    const user = this.user.nativeElement;
    this.render2.setStyle(login, 'display','block');
    this.render2.setStyle(signup, 'display','block');
    this.render2.setStyle(sesion, 'display','block');
    this.render2.setStyle(user, 'display','none');
  }
  showMenu(){
    const menu = this.menu.nativeElement;
    const ocultar = this.ocultar.nativeElement;
    console.log(this.menu);
    this.render2.addClass(menu,'menu__button--mostrar');    
    this.render2.addClass(ocultar,'ocultar');
  }
  hiddenMenu(){
    const menu = this.menu.nativeElement;
    const redes = this.redes.nativeElement;
    const redes2 = this.redes2.nativeElement;
    const contacto = this.contacto.nativeElement;
    const contacto2 = this.contacto2.nativeElement;
    const ocultar = this.ocultar.nativeElement;
    this.render2.removeClass(menu,'menu__button--mostrar');
    this.render2.removeClass(contacto,'container__li--expand');
    this.render2.removeClass(contacto2, 'li__container--expand');
    this.render2.removeClass(redes,'container__li--expand');
    this.render2.removeClass(redes2,'li__container--expand');
    this.render2.removeClass(ocultar,'ocultar');
    this.menus=0;
    this.menu2=0;
  }
  showIcons(){
    const redes = this.redes.nativeElement;
    const redes2 = this.redes2.nativeElement;
    this.render2.addClass(redes,'container__li--expand');
    this.render2.addClass(redes2,'li__container--expand');
    this.menus++;
    if(this.menus==2){
      this.render2.removeClass(redes,'container__li--expand');
      this.render2.removeClass(redes2,'li__container--expand');
      this.menus=0;
    }
  }
showIcons2(){
    const contacto = this.contacto.nativeElement;
    const contacto2 = this.contacto2.nativeElement;
    this.render2.addClass(contacto2, 'li__container--expand');
    this.render2.addClass(contacto, 'container__li--expand');
    this.menu2 ++;
    if(this.menu2 == 2){
      this.render2.removeClass(contacto2, 'li__container--expand');
      this.render2.removeClass(contacto, 'container__li--expand');
      this.menu2=0;
    }
  } 
  skillON(dato = this.datos.nativeElement, logo = this.datos.nativeElement, lvl = this.lvl.nativeElement){
    this.render2.setStyle(logo,'opacity', '0');
    this.render2.setStyle(dato,'opacity', '100%');
    this.render2.setStyle(lvl,'opacity', '100%');
    
  }
  skillOF(dato = this.datos.nativeElement, logo = this.datos.nativeElement, lvl = this.lvl.nativeElement){
    this.render2.setStyle(dato,'opacity', '0');
    this.render2.setStyle(logo,'opacity', '100%');
    this.render2.setStyle(lvl,'opacity', '0');
  }

}
