import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  @ViewChild ('body') body  !: ElementRef;
  form:FormGroup;
  form2:FormGroup;
  persona:FormGroup;
  token = localStorage.getItem('token');
  constructor(private render2: Renderer2, private service:DatosService,private formBuilder:FormBuilder,private service2:AutenticacionService,private toast:ToastrService){
    this.persona=this.formBuilder.group({
      id: ['', Validators.required],
      user: ['', Validators.required],
    }),
    this.form=this.formBuilder.group({
      nombreProyecto:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      fecha_Lanz:['',[Validators.required]],
      url:['',[Validators.required]],
      logo:['',[Validators.required]],
      persona:this.persona,
      })
    this.persona.patchValue({
      id: 1,
      user:'MrUse77'
    });
    this.form2=this.formBuilder.group({
      nombreProyecto:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      fecha_Lanz:['',[Validators.required]],
      url:['',[Validators.required]],
      logo:['',[Validators.required]],
    })
  }
  ObtenerDatos(){
    this.service.DatosProyectos().subscribe(data => {
      this.pro = data;
    });
  }
  ngOnInit(): void {
    this.ObtenerDatos();
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
      const newPro = this.newPro.nativeElement;
      this.render2.setStyle(newPro, 'display', 'none');
      this.ObtenerDatos();
    }),(error: any)=>{
      console.error(error);
    }
  }
  agregarProyectos(){
    const newPro = this.newPro.nativeElement;
    this.render2.setStyle(newPro, 'display', 'flex');
    const body = this.body.nativeElement;
    this.render2.setStyle(body, 'position', 'fixed')
  }
  cerrarVentana(){
    const newPro = this.newPro.nativeElement;
    this.render2.setStyle(newPro, 'display', 'none');
        const body = this.body.nativeElement;
    this.render2.setStyle(body, 'position', 'static')
  }
  async EditarProyectos(id: number,form2: Proyectos){
    console.log('ID del Proyectos a editar:', id);
    await this.service.EditarProyecto(id,form2);
    this.ObtenerDatos();
  }
  redireccionar(url: any) {
    window.location.href = `${url}`;
  }
}
