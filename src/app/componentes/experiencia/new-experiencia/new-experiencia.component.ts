import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/clases/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

    empresa: string = '';
    logoempresa: string = '';
    sitioweb: string = '';
    telefono: string = '';
    cargo: string = '';
    periodo: string = '';
    descripcion: string = '';

  constructor(private servicioExperiencia: ExperienciaService , private ruta: Router) { }

  ngOnInit(): void {
  }

  newExp(): void {
    const exp = new Experiencia (this.empresa, this.logoempresa, this.sitioweb, this.telefono, this.cargo, this.periodo, this.descripcion);
    this.servicioExperiencia.nuevaExperiencia(exp).subscribe(data =>{
      alert("añadiste una nueva experiencia!");
      this.ruta.navigate(['']);
    }, err =>{
      alert("algo falló");
      this.ruta.navigate(['']);
    }
    )
  }

}
