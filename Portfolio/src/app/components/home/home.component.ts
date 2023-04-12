
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  title = 'Portfolio';
  @ViewChild ('menu') menu !: ElementRef;
  @ViewChild ('redes') redes !: ElementRef;
  @ViewChild ('contacto') contacto !: ElementRef;
  @ViewChild ('contacto2') contacto2 !: ElementRef;
  @ViewChild ('redes2') redes2 !: ElementRef;
  @ViewChild ('ocultar') ocultar !: ElementRef;
  @ViewChild ('datos') datos !: ElementRef;
  @ViewChild ('logo') logo !: ElementRef;
  @ViewChild ('lvl') lvl !: ElementRef;
  desc = ['Técnico electrónico y desarrollador web full stack'];
  menus=0;
  menu2=0;
  skill=0;
  
  constructor(private render2: Renderer2,
  ){
  }
  ngOnInit(): void {
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
