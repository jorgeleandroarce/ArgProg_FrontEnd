import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList:any;

  constructor(private servicioExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    this.servicioExperiencia.obtenerExperiencia().subscribe(data =>{
      this.experienciaList=data;
    });
  }

  borrarExp(id? : number){
    if(id != undefined){
      this.servicioExperiencia.borrarExperiencia(id).subscribe(data =>{
        this.ngOnInit();
    });
    }
  }

}
