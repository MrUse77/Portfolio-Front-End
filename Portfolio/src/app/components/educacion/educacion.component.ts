import { NgClass } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  show=0;
  show1=0;
  show2=0;
  @ViewChild('info1')info1!: ElementRef;
  @ViewChild('info2')info2!: ElementRef; 
  @ViewChild('info3')info3!: ElementRef; 
  @ViewChild('imagen') imagen!:ElementRef;
  @ViewChild('imagen2') imagen2!:ElementRef;
  @ViewChild('imagen3') imagen3!:ElementRef;
  @ViewChild('agregar') agregar!:ElementRef;

  constructor(private render2: Renderer2,
    ){
  }
  
  ShowInfo(num: string){
    const info1 = this.info1.nativeElement;
    const info2 = this.info2.nativeElement;
    const info3 = this.info3.nativeElement;
    const imagen = this.imagen.nativeElement;
    const imagen2 = this.imagen2.nativeElement;
    const imagen3 = this.imagen3.nativeElement;

    if(num == 'escuela'){
    
      this.render2.setStyle(info1,'opacity','1');
      this.render2.setStyle(info1,'top','107px');
      this.render2.setStyle(info1,'visibility','visible');
      this.render2.setStyle(imagen,'visibility','hidden');
      this.render2.setStyle(imagen,'opacity','0');
      this.render2.setStyle(imagen,'top','70%');
      this.show++;

      if(this.show ==2){
        this.show = 0;
        this.render2.setStyle(info1, 'opacity', '0');
        this.render2.setStyle(info1,'top','70%');
        this.render2.setStyle(info1, 'visibility', 'hidden');
        this.render2.setStyle(imagen,'top','150px');
        this.render2.setStyle(imagen,'opacity','1');
        this.render2.setStyle(imagen,'visibility','visible');
      }
    }
    if(num == 'utn'){
      this.render2.setStyle(info2,'opacity','1');
      this.render2.setStyle(info2,'top','107px');
      this.render2.setStyle(info2,'visibility','visible');
      this.render2.setStyle(imagen2,'visibility','hidden');
      this.render2.setStyle(imagen2,'opacity','0');
      this.render2.setStyle(imagen2,'top','70%');
      this.show1 ++;
      if(this.show1 == 2){
        this.render2.setStyle(info2, 'opacity', '0');
        this.render2.setStyle(info2,'top','60%');
        this.render2.setStyle(info2, 'visibility', 'hidden');
        this.render2.setStyle(imagen2,'top','150px');
        this.render2.setStyle(imagen2,'opacity','1');
        this.render2.setStyle(imagen2,'visibility','visible');
        this.show1 = 0;
      }
    }
    if(num == 'arg_pro'){
      this.render2.setStyle(info3,'opacity','1');
      this.render2.setStyle(info3,'visibility','visible');
      this.render2.setStyle(imagen3,'visibility','hidden');
      this.render2.setStyle(imagen3,'opacity','0');
      this.show2 ++;
      if(this.show2 == 2){
        this.render2.setStyle(info3, 'opacity', '0');
        this.render2.setStyle(info3, 'visibility', 'hidden');
        this.render2.setStyle(imagen3,'opacity','1');
        this.render2.setStyle(imagen3,'visibility','visible');
        this.show2 = 0;
      }
    }
 }
 mostrar(){
  const agregar = this.agregar.nativeElement;
  this.render2.setStyle(agregar, 'fill', '#1A9FFF');
 }
}
