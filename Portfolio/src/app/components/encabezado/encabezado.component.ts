
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { trigger,style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit{
  title = 'Portfolio';
  @ViewChild ('menu') menu !: ElementRef;
  @ViewChild ('iconos') icons !: ElementRef;
  @ViewChild ('iconos2') icons2 !: ElementRef;
  @ViewChild ('options') options !: ElementRef;
  @ViewChild ('options2') options2 !: ElementRef;
  @ViewChild ('redes') redes !: ElementRef;
  @ViewChild ('proyectos') proyectos !: ElementRef;
  @ViewChild ('experiencia') experiencia !: ElementRef;
  @ViewChild ('educacion') educacion !: ElementRef;
  desc = ['Técnico electrónico y desarrollador web full stack'];
  menus=0;
  menu2=0;
  
  
  constructor(private render2: Renderer2,
  ){
  }
  ngOnInit(): void {
  console.log('OnInit -> '); 
  }
  showMenu(){
    const menu = this.menu.nativeElement;
    const icons = this.icons.nativeElement;
    const icons2 = this.icons2.nativeElement;

    console.log(this.menu);
    this.render2.setStyle(menu, 'transform', 'translateY(0)');
    this.render2.setStyle(menu, 'visibility', 'visible');
    this.render2.setStyle(icons,'bottom','30%');
    this.render2.setStyle(icons, 'visibility', 'hidden');
    this.render2.setStyle(icons2,'bottom','30%');
    this.render2.setStyle(icons2, 'visibility', 'hidden');
  }
  hiddenMenu(){
    const menu = this.menu.nativeElement;
    const icons = this.icons.nativeElement;
    const icons2 = this.icons2.nativeElement;
    this.render2.setStyle(menu, 'transform', 'translateY(-100%)');
    this.render2.setStyle(menu, 'visibility', 'hidden');
    this.render2.setStyle(icons,'bottom','30%');
    this.render2.setStyle(icons, 'visibility', 'hidden');
    this.render2.setStyle(icons2, 'opacity', '0');
    this.render2.setStyle(icons2,'bottom','30%');
    this.render2.setStyle(icons2, 'visibility', 'hidden');
    this.menus=0;
    this.menu2=0;
  }
  showIcons(){
    const icons = this.icons.nativeElement;
    const redes = this.redes.nativeElement;
    const proyectos = this.proyectos.nativeElement;
    const experiencia = this.experiencia.nativeElement;
    const educacion = this.educacion.nativeElement;

    this.render2.setStyle(icons,'transform','translateY(0) ScaleY(100%)');
    this.render2.setStyle(icons,'visibility','visible');
    if(this.menu2==0){
      this.render2.setStyle(proyectos,'transform', 'translateY(-95px)');
      this.render2.setStyle(educacion,'transform', 'translateY(-95px)');
      this.render2.setStyle(experiencia,'transform', 'translateY(-95px)');
    }
    else{
      this.render2.setStyle(proyectos,'transform','translateY(-20px)');
      this.render2.setStyle(educacion,'transform','translateY(-20px)');
      this.render2.setStyle(experiencia,'transform','translateY(-20px)');
    }
    this.menus++;
    if(this.menus==2){
      this.menus=0;
      this.render2.setStyle(icons,'transform','translateY(-50%) ScaleY(0)');
      this.render2.setStyle(icons, 'visibility', 'hidden');
      if(this.menu2==0){
        this.render2.setStyle(proyectos,'transform', 'translateY(-265px)');
        this.render2.setStyle(educacion,'transform', 'translateY(-265px)');
        this.render2.setStyle(experiencia,'transform', 'translateY(-265px)');
      }
      else{
        this.render2.setStyle(proyectos,'transform','translateY(-190px)');
        this.render2.setStyle(educacion,'transform','translateY(-190px)');
        this.render2.setStyle(experiencia,'transform','translateY(-190px)');
      }
    }
  }
showIcons2(){
    const icons2 = this.icons2.nativeElement;
    const redes = this.redes.nativeElement;
    const proyectos = this.proyectos.nativeElement;
    const experiencia = this.experiencia.nativeElement;
    const educacion = this.educacion.nativeElement;
    this.render2.setStyle(icons2,'transform','translateY(0) ScaleY(100%)');
    this.render2.setStyle(icons2,'visibility','visible');
    this.render2.setStyle(icons2,'visibility','visible');
    this.render2.setStyle(redes,'transform','translateY(-5px)');
    if(this.menus==0){
      this.render2.setStyle(proyectos,'transform','translateY(-190px)');
      this.render2.setStyle(educacion,'transform','translateY(-190px)');
      this.render2.setStyle(experiencia,'transform','translateY(-190px)');
    }
    else{
      this.render2.setStyle(proyectos,'transform','translateY(0)');
      this.render2.setStyle(educacion,'transform','translateY(0)');
      this.render2.setStyle(experiencia,'transform','translateY(0)');
    }
    this.menu2++;
    if(this.menu2==2){
      this.menu2=0;
      this.render2.setStyle(icons2,'transform','translateY(-50%) ScaleY(0)');
      this.render2.setStyle(icons2, 'visibility', 'hidden');
      this.render2.setStyle(icons2, 'visibility', 'hidden');
      this.render2.setStyle(redes,'transform', 'translateY(-80px)');
      if(this.menus==0){
        this.render2.setStyle(proyectos,'transform', 'translateY(-265px)');
        this.render2.setStyle(educacion,'transform', 'translateY(-265px)');
        this.render2.setStyle(experiencia,'transform', 'translateY(-265px)');
      }
      else{
        this.render2.setStyle(proyectos,'transform', 'translateY(-85px)');
        this.render2.setStyle(educacion,'transform', 'translateY(-85px)');
        this.render2.setStyle(experiencia,'transform', 'translateY(-85px)');
      }
    }
  } 
}