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
<<<<<<< HEAD
export class EducacionComponent {
  secu= ["EEST N°8", "TECNICO EN ELECTRONICA", "2016-2022"];
  curso = [
    "UTN HAEDO", "CURSO DE REPARACION DE PC","Abril 2019 - Septiembre 2019",
    "ARGENTINA PROGRAMA", "1° ETAPA #SeProgramar", "junio 2022","","2° ETAPA #YoProgramo", "CURSO DE DESARROLLO WEB FULL STACK","En curso"
          ];
  show=0;
  show1=0;
  show2=0;
<<<<<<< HEAD
  show3=0;
=======
  show3=0
>>>>>>> 0f1035e79c3aaef1443053f11f9a60218c258dd6
  @ViewChild('info1')info1!: ElementRef;
  @ViewChild('info2')info2!: ElementRef; 
  @ViewChild('info3')info3!: ElementRef; 
  @ViewChild('info4')info4!: ElementRef; 
  @ViewChild('imagen') imagen!:ElementRef;
  @ViewChild('imagen2') imagen2!:ElementRef;
  @ViewChild('imagen3') imagen3!:ElementRef;
  @ViewChild('imagen4') imagen4!:ElementRef;
  @ViewChild('agregar') agregar!:ElementRef;
<<<<<<< HEAD
  @ViewChild('edit') edit!:ElementRef;
  @ViewChild('editar') editar!:ElementRef;
  @ViewChild('edicion') edicion!:ElementRef;
=======
>>>>>>> 0f1035e79c3aaef1443053f11f9a60218c258dd6

  constructor(private render2: Renderer2,
    ){
=======
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
>>>>>>> develop
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
<<<<<<< HEAD
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
      this.render2.setStyle(info3,'top','107px');
      this.render2.setStyle(imagen3,'visibility','hidden');
      this.render2.setStyle(imagen3,'opacity','0');
      this.render2.setStyle(imagen3,'top','70%');
      this.show2 ++;
      if(this.show2 == 2){
        this.render2.setStyle(info3, 'opacity', '0');
        this.render2.setStyle(info3, 'visibility', 'hidden');
        this.render2.setStyle(info3,'top','60%');
        this.render2.setStyle(imagen3,'opacity','1');
        this.render2.setStyle(imagen3,'visibility','visible');
        this.render2.setStyle(imagen3,'top','150px');
        this.show2 = 0;
      }
    }
    if(num == 'arg_pro2'){
      this.render2.setStyle(info4,'opacity','1');
      this.render2.setStyle(info4,'visibility','visible');
      this.render2.setStyle(info4,'top','70px');
      this.render2.setStyle(imagen4,'visibility','hidden');
      this.render2.setStyle(imagen4,'opacity','0');
      this.render2.setStyle(imagen4,'top','70%');
      this.show3 ++;
      if(this.show3 == 2){
        this.render2.setStyle(info4, 'opacity', '0');
        this.render2.setStyle(info4, 'visibility', 'hidden');
        this.render2.setStyle(info4,'top','60%');
        this.render2.setStyle(imagen4,'opacity','1');
        this.render2.setStyle(imagen4,'visibility','visible');
        this.render2.setStyle(imagen4,'top','150px');
        this.show3 = 0;
      }
    }
}
<<<<<<< HEAD
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
=======
  }
>>>>>>> develop

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
<<<<<<< HEAD
=======
>>>>>>> 0f1035e79c3aaef1443053f11f9a60218c258dd6
=======
>>>>>>> develop
}
