import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/clases/educacion';

@Component({
  selector: 'app-new-educ',
  templateUrl: './new-educ.component.html',
  styleUrls: ['./new-educ.component.css']
})

export class NewEducComponent implements OnInit {

  escuela: string = '';
  logotipo: string = '';
  sitioweb: string = '';
  titulo: string = '';
  periodo: string = '';

  constructor(private servicioEducacion: EducacionService, private ruta: Router) { }

  ngOnInit(): void {
  }

  newEduc(): void {
    const edu = new Educacion (this.escuela, this.logotipo, this.sitioweb, this.titulo, this.periodo);
    this.servicioEducacion.nuevaEducacion(edu).subscribe(data =>{
      alert("añadiste una nueva capacitacion!");
      this.ruta.navigate(['']);
    }, err =>{
      alert("algo falló");
      this.ruta.navigate(['']);
    }
    )
  }

}
