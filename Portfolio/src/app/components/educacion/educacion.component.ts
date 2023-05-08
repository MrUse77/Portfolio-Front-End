import { NgClass, CommonModule  } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion, TipoEducacion } from 'src/app/Modelo/Educacion';
import { Usuario } from 'src/app/Modelo/Usuario';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { DatosService } from 'src/app/service/datos.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit{
  edu:  Educacion[] = [];
  edu2:Educacion[] = [];
  edu1:Educacion[] = [];
  tipo_educacion: TipoEducacion[] = [];
  usuario: Usuario[] = [];
  @ViewChild('agregar') agregar!:ElementRef;
  @ViewChild('edit') edit!:ElementRef;
  @ViewChild('editar') editar!:ElementRef;
  @ViewChild('edicion') edicion!:ElementRef;
  @ViewChild('newEdu') newEdu!:ElementRef;
  @ViewChild('newEdu2') newEdu2!:ElementRef;
  @ViewChild ('signup') signup !: ElementRef;
  @ViewChild ('edition') edition !: ElementRef;
  form:FormGroup;
  form2:FormGroup;
  renderer: any;
  token = localStorage.getItem('token');
  constructor(private render2: Renderer2, private service:DatosService,private formBuilder:FormBuilder,private service2:AutenticacionService){
    this.form=this.formBuilder.group(
      {
      nombreEducacion:['',[Validators.required]],
      titulo:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFin:['',[Validators.required]], 
      logo:['',[Validators.required]],
      persona:this.formBuilder.group({
      id:['1']
      }),
      tipo_Educacion: this.formBuilder.group({
        id: ['',[Validators.required]], // asumiendo que id es un número
      })
      }
    )
    this.form2=this.formBuilder.group(
      {
      nombreEducacion:['',[Validators.required]],
      titulo:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFin:['',[Validators.required]], 
      tipo_Educacion: this.formBuilder.group({
        id: ['',[Validators.required]],
        nombre_tipo: ['',[Validators.required]], // asumiendo que id es un número
      }),
      }
    )
  }
  ObtenerDatos(){
    this.service.DatosEducacion().subscribe(data => {
      this.edu = data;
      console.log(data);
      this.edu1 = this.edu.filter(edu => edu.tipo_Educacion?.id == 1 || edu.tipo_Educacion?.id == 2 );
      console.log(this.edu1);
      this.edu2 = this.edu.filter(edu => edu.tipo_Educacion?.id == 3);
      console.log(this.edu2);
    });
    
    this.service.tipoE().subscribe(data2=>{
      this.tipo_educacion=data2;
    })
  }
  ngOnInit(): void {
    this.ObtenerDatos();
  }  
  ngAfterViewInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const signup = this.signup.nativeElement;
      const newEdu2 = this.newEdu2.nativeElement;
      this.render2.removeClass(newEdu2, 'ocultar');
      this.render2.setStyle(signup, 'display', 'none');

    } else {
  
      const signup = this.signup.nativeElement;
      const newEdu2 = this.newEdu2.nativeElement;
      this.render2.setStyle(newEdu2, 'display', 'none');
      this.render2.setStyle(signup, 'display', 'none');
    }
  }

NewEdu(form: Educacion){
  this.service.CrearEducacion(form).subscribe((data2)=>{
    console.log(data2);
    const newEdu = this.newEdu.nativeElement;
    this.render2.setStyle(newEdu, 'display', 'none');
    this.ObtenerDatos();
  }),(error: any)=>{
    
    console.error(error);
}
}
agregarEducacion (){
  const newEdu = this.newEdu.nativeElement;
  this.render2.setStyle(newEdu, 'display', 'flex');
}
cerrarVentana(){
  const newEdu = this.newEdu.nativeElement;
  this.render2.setStyle(newEdu, 'display', 'none');
}
  async EditarEducacion(id: number,form2: Educacion){
  console.log('ID del Educacion a editar:', id);
  await this.service.EditarEducacion(id, form2);
  this.ObtenerDatos();
}
}
