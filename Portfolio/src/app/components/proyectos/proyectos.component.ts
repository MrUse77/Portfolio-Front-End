import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyectos } from 'src/app/Modelo/Proyectos';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { DatosService } from 'src/app/service/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  pro: Proyectos[] = [];
  @ViewChild('agregar') agregar!:ElementRef;
  @ViewChild('edit') edit!:ElementRef;
  @ViewChild('editar') editar!:ElementRef;
  @ViewChild('edicion') edicion!:ElementRef;
  @ViewChild('newPro') newPro!:ElementRef;
  @ViewChild('trabajo') trabajo!:ElementRef;
  form:FormGroup;
  form2:FormGroup;
  constructor(private render2: Renderer2, private service:DatosService,private formBuilder:FormBuilder,private service2:AutenticacionService){
    this.form=this.formBuilder.group(
      {
      nombreProyecto:['',[Validators.required]],
      Descripcion:['',[Validators.required]],
      fecha_Lanz:['',[Validators.required]],
      url:['',[Validators.required]],
      logo:['',[Validators.required]],
      }
    )
    this.form2=this.formBuilder.group(
      {
      nombreProyecto:['',[Validators.required]],
      Descripcion:['',[Validators.required]],
      fecha_Lanz:['',[Validators.required]],
      url:['',[Validators.required]],
      logo:['',[Validators.required]],
      }
    )
  }
  ngOnInit(): void {
    this.service.DatosProyectos().subscribe(data => {
      this.pro = data;
      console.log(data);
    });
  }
  showMenu(){
    const ocultar = this.trabajo.nativeElement;

    this.render2.addClass(ocultar,'ocultar');
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
  NewPro(form: Proyectos){
    this.service.CrearProyectos(form).subscribe((data2)=>{
      console.log(data2);
      const newPro = this.newPro.nativeElement;
      this.render2.setStyle(newPro, 'display', 'none');
    }),(error: any)=>{
      console.error(error);
  }
  }
  agregarProyectos(){
    const newPro = this.newPro.nativeElement;
    this.render2.setStyle(newPro, 'display', 'flex');
  }
  cerrarVentana(){
    const newPro = this.newPro.nativeElement;
    this.render2.setStyle(newPro, 'display', 'none');
  }
    async EditarProyectos(id: number,form2: Proyectos){
    console.log('ID del Proyectos a editar:', id);
    await this.service.EditarProyecto(id,form2)
  }
  redireccionar(url: any) {
    window.location.href = `${url}`;
  }
  
}
