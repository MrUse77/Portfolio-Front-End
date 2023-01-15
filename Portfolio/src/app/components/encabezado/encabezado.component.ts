import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  title = 'Portfolio';
  desc = 'Tecnico electronico y Desarrollador Web Full Stack.'
  
  
  constructor(
  ){
  }
  ngOnInit(): void {
    
  }
}
