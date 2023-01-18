import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  biomedic = ["Biomedic", "Servicio Tecnico", "Dic 2021 - Nov 2022"];
  @ViewChild('info')
  info!: ElementRef; 
  @ViewChild('imagen') imagen!:ElementRef;
  show=0;
  
  constructor(private render2: Renderer2,
    ){
  }

  ngOnInit(): void {
    
  }
  ShowInfo(){
    const info = this.info.nativeElement;
    const imagen = this.imagen.nativeElement;
    this.render2.setStyle(info,'opacity','1');
    this.render2.setStyle(info,'top','107px');
    this.render2.setStyle(info,'visibility','visible');
    this.render2.setStyle(imagen,'visibility','hidden');
    this.render2.setStyle(imagen,'opacity','0');
    this.render2.setStyle(imagen,'top','70%');
    this.show++;
    if(this.show==2){
      this.show=0;
      this.render2.setStyle(info, 'opacity', '0');
      this.render2.setStyle(info,'top','70%');
      this.render2.setStyle(info, 'visibility', 'hidden');
      this.render2.setStyle(imagen,'top','150px');
      this.render2.setStyle(imagen,'opacity','1');
      this.render2.setStyle(imagen,'visibility','visible');
    }
    }
    
}
