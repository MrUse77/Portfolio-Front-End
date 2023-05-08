import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Trabajo } from 'src/app/Modelo/Trabajo';
import { TipoTrabajo } from 'src/app/Modelo/TipoTrabajo';
import { DatosService } from 'src/app/service/datos.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { __values } from 'tslib';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Usuario } from 'src/app/Modelo/Usuario';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit{

  @ViewChild('info') info!: ElementRef; 
  @ViewChild('imagen') imagen!:ElementRef;;
  @ViewChild('edit') edit!:ElementRef;
  @ViewChild('editar') editar!:ElementRef;
  @ViewChild('edicion') edicion!:ElementRef;
  @ViewChild('trabajo') trabajo!:ElementRef;
  @ViewChild('newWork') newWork!:ElementRef;
  token = localStorage.getItem('token');
  show=0;
  exp: Trabajo[] = [];
  tipo_Trabajo: TipoTrabajo[] = [];
  usuario: Usuario[] = [];
  form:FormGroup;
  form2:FormGroup;
  constructor(private render2: Renderer2,private service:DatosService,private formBuilder:FormBuilder,private service2:AutenticacionService
    ){
      this.form=this.formBuilder.group(
        {
        nombreEmpresa:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        fechaInicio:['',[Validators.required]],
        fechaFin:['',[Validators.required]], 
        logo:['',[Validators.required]],
        tipo_Trabajo:['',[Validators.required]],
        }
      )
      this.form2=this.formBuilder.group(
        {
        nombreEmpresa:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        fechaInicio:['',[Validators.required]],
        fechaFin:['',[Validators.required]], 
        tipo_Trabajo:['',[Validators.required]],
        logo:['',[Validators.required]],
        }
      )
  }
  ObtenerDatos(){
    this.service.DatosTrabajo().subscribe(data=>{
      console.log(data);
      this.exp=data;
    })
    this.service.tipoT().subscribe(data2=>{
      this.tipo_Trabajo=data2;
    })
  }
  ngOnInit(): void {
  this.ObtenerDatos()
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
      this.render2.setStyle(trabajo, 'display', 'none');
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
      this.render2.setStyle(trabajo, 'display', 'block');
    }
    agregarTrabajo(){
      const newWork = this.newWork.nativeElement;
      this.render2.setStyle(newWork, 'display', 'flex');
    }
    NewWork(form: Trabajo){
      this.service.CrearTrabajo(form).subscribe((data2)=>{
        console.log(data2);
        const newWork = this.newWork.nativeElement;
        this.render2.setStyle(newWork, 'display', 'none');
        this.ObtenerDatos
      }),(error: any)=>{
        console.error(error);
    }
    }

    cerrarVentana(){
      const newWork = this.newWork.nativeElement;
      this.render2.setStyle(newWork, 'display', 'none');
    }
    EditarTrabajo(id: number,form2: Trabajo){
      console.log('ID del trabajo a editar:', id);
      this.service.EditarTrabajo(id, form2);
      this.ObtenerDatos();
    }
  }
