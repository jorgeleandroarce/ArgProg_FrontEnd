import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  educacionList:any;

  constructor(private servicioEducacion:EducacionService) { }

  ngOnInit(): void {
    this.servicioEducacion.obtenerEducacion().subscribe(data =>{
      this.educacionList=data;
    });
  }

  borrarE(id? : number){
    if(id != undefined){
      this.servicioEducacion.borrarEducacion(id).subscribe(data =>{
        this.ngOnInit();
    });
    }
  }
}
