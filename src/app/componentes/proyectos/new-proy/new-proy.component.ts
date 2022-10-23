import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/clases/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-new-proy',
  templateUrl: './new-proy.component.html',
  styleUrls: ['./new-proy.component.css']
})
export class NewProyComponent implements OnInit {

  nombre: string ='';
  logo: string ='';
  url: string ='';
  fecha: string ='';
  descripcion: string ='';

  constructor(private servicioProyectos: ProyectosService, private ruta: Router) { }

  ngOnInit(): void {
  }

  newProy(): void {
    const proy = new Proyectos (this.nombre, this.logo, this.url, this.fecha, this.descripcion);
    this.servicioProyectos.nuevoProyecto(proy).subscribe(data =>{
      alert("añadiste un nuevo Proyecto!");
      this.ruta.navigate(['']);
    }, err =>{
      alert("algo falló");
      this.ruta.navigate(['']);
    }
    )
  }

}
