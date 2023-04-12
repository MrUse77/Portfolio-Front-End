import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent {
  biomedic!: string;
  show=0;
  ShowInfo(){
    console.log(this.biomedic);
    this.show++;
    if(this.show==2){
    this.show=0;
    }
  }
}
