import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Trabajo } from 'src/app/Modelo/Trabajo';
import { TipoTrabajo } from 'src/app/Modelo/TipoTrabajo';
import { DatosService } from 'src/app/service/datos.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit{
  biomedic = ["Biomedic", "Servicio Tecnico", "Dic 2021 - Nov 2022"];
  @ViewChild('info')info!: ElementRef; 
  @ViewChild('imagen') imagen!:ElementRef;
  @ViewChild('edit') edit!:ElementRef;
  @ViewChild('editar') editar!:ElementRef;
  @ViewChild('edicion') edicion!:ElementRef;
  @ViewChild('trabajo') trabajo!:ElementRef;
  show=0;
  exp: Trabajo[] = [];
  tipo_trabajo: TipoTrabajo[] = [];

  constructor(private render2: Renderer2,private service:DatosService,
    ){
  }

  ngOnInit(): void {
    this.service.Datos().subscribe(data=>{
      this.exp=data;
    })
    this.service.tipoT().subscribe(data2=>{
      this.tipo_trabajo=data2;
    })
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
    EditInfo(){
      const edit = this.edit.nativeElement;
      const editar = this.editar.nativeElement;
      const edicion = this.edicion.nativeElement;
      const trabajo = this.trabajo.nativeElement;
      this.render2.setStyle(edit, 'display', 'block');
      this.render2.setStyle(editar, 'display', 'none');
      this.render2.setStyle(edicion, 'display', 'flex');
      this.render2.setStyle(trabajo, 'z-index', '-1');
    }
    SaveInfo(){
      const edit = this.edit.nativeElement;
      const editar = this.editar.nativeElement;
      const edicion = this.edicion.nativeElement;
      const trabajo = this.trabajo.nativeElement;
      this.render2.setStyle(edit, 'display', 'none');
      this.render2.setStyle(editar, 'display', 'block');
      this.render2.setStyle(edicion, 'display', 'none');
      this.render2.setStyle(trabajo, 'z-index', '0');
    }

}
