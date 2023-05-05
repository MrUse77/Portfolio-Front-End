import { NgClass, CommonModule  } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
export class EducacionComponent {
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
  
  form:FormGroup;
  form2:FormGroup;
  constructor(private render2: Renderer2, private service:DatosService,private formBuilder:FormBuilder,private service2:AutenticacionService){
    this.form=this.formBuilder.group(
      {
      nombreEducacion:['',[Validators.required]],
      titulo:['',[Validators.required]],
      fechaInicio:['',[Validators.required]],
      fechaFin:['',[Validators.required]], 
      logo:['',[Validators.required]],
      persona:this.formBuilder.group({
      id:['543ba29f-28d2-44cc-a4b0-135594f775ad']
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
      logo:['',[Validators.required]],
      }
    )
  }
  ngOnInit(): void {
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
SaveInfo(){
  const edit = this.edit.nativeElement;
  const editar = this.editar.nativeElement;
  const edicion = this.edicion.nativeElement;
  this.render2.setStyle(edit, 'display', 'none');
  this.render2.setStyle(editar, 'display', 'block');
  this.render2.setStyle(edicion, 'display', 'none');
}
EditInfo(){
  const edit = this.edit.nativeElement;
  const editar = this.editar.nativeElement;
  const edicion = this.edicion.nativeElement;

  this.render2.setStyle(edit, 'display', 'block');
  this.render2.setStyle(editar, 'display', 'none');
  this.render2.setStyle(edicion, 'display', 'flex');
}
NewEdu(form: Educacion){
  this.service.CrearEducacion(form).subscribe((data2)=>{
    console.log(data2);
    const newEdu = this.newEdu.nativeElement;
    this.render2.setStyle(newEdu, 'display', 'none');
  }),(error: any)=>{
    console.error(error);
}
}
agregarEducacion  (){
  const newEdu = this.newEdu.nativeElement;
  this.render2.setStyle(newEdu, 'display', 'flex');
}
cerrarVentana(){
  const newEdu = this.newEdu.nativeElement;
  this.render2.setStyle(newEdu, 'display', 'none');
}
  async EditarEducacion(id: number,form2: Educacion){
  console.log('ID del Educacion a editar:', id);
  await this.service.EditarEducacion(id, form2)
}
svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>`;
}
