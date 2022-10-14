import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  proyectosList:any;

  constructor(private servicioProyectos:ProyectosService) { }

  ngOnInit(): void {
    this.servicioProyectos.obtenerProyectos().subscribe(data =>{
      this.proyectosList=data;
    });
  }

  borrarProy(id? : number){
    if(id != undefined){
      this.servicioProyectos.borrarProyectos(id).subscribe(data =>{
        this.ngOnInit();
    });
    }
  }
}
