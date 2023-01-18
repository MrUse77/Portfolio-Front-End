
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  title = 'Portfolio';
  @ViewChild ('menu') menu !: ElementRef;
  @ViewChild ('iconos') icons !: ElementRef;
  @ViewChild ('iconos2') icons2 !: ElementRef;
  desc = ['Técnico electrónico y desarrollador web full stack'];
  menus=0;
  
  
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
    this.render2.setStyle(menu, 'height', '100vh');
    this.render2.setStyle(menu, 'visibility', 'visible');
    this.render2.setStyle(menu, 'opacity', '1');
    this.render2.setStyle(icons, 'opacity', '0');
    this.render2.setStyle(icons,'top','60%');
    this.render2.setStyle(icons, 'visibility', 'hidden');
    this.render2.setStyle(icons2, 'opacity', '0');
    this.render2.setStyle(icons2,'top','60%');
    this.render2.setStyle(icons2, 'visibility', 'hidden');
  }
  hiddenMenu(){
    const menu = this.menu.nativeElement;
    const icons = this.icons.nativeElement;
    const icons2 = this.icons2.nativeElement;
    this.render2.setStyle(menu, 'height', '0');
    this.render2.setStyle(menu, 'visibility', 'hidden');
    this.render2.setStyle(menu, 'opacity', '0');
    this.render2.setStyle(icons, 'opacity', '0');
    this.render2.setStyle(icons,'top','60%');
    this.render2.setStyle(icons, 'visibility', 'hidden');
    this.render2.setStyle(icons2, 'opacity', '0');
    this.render2.setStyle(icons2,'top','60%');
    this.render2.setStyle(icons2, 'visibility', 'hidden');
  }
  showIcons(){
    const icons = this.icons.nativeElement;
    this.render2.setStyle(icons,'top','86%');
    this.render2.setStyle(icons,'opacity','1');
    this.render2.setStyle(icons,'visibility','visible');
    this.menus++;
    if(this.menus==2){
      this.menus=0;
      this.render2.setStyle(icons, 'opacity', '0');
      this.render2.setStyle(icons,'top','60%');
      this.render2.setStyle(icons, 'visibility', 'hidden');
    }
  }
showIcons2(){
    const icons2 = this.icons2.nativeElement;
    this.render2.setStyle(icons2,'top','86%');
    this.render2.setStyle(icons2,'opacity','1');
    this.render2.setStyle(icons2,'visibility','visible');
    this.menus++;
    if(this.menus==2){
      this.menus=0;
      this.render2.setStyle(icons2, 'opacity', '0');
      this.render2.setStyle(icons2,'top','60%');
      this.render2.setStyle(icons2, 'visibility', 'hidden');
    }
  } 
}

