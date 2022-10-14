import { Component, OnInit } from '@angular/core';
import { HabilidadessoftService } from 'src/app/servicios/habilidadessoft.service';

@Component({
  selector: 'app-habilidadessoft',
  templateUrl: './habilidadessoft.component.html',
  styleUrls: ['./habilidadessoft.component.css']
})
export class HabilidadessoftComponent implements OnInit {

  habilidadesSoftList:any;
  
  constructor(private datosHabilidadessoft:HabilidadessoftService) { }

  ngOnInit(): void {
    this.datosHabilidadessoft.obtenerHabilidadessoft().subscribe(data =>{
    this.habilidadesSoftList=data;
   });
  }

  borrarHabSf(id? : number){
    if(id != undefined){
      this.datosHabilidadessoft.borrarHabilidadessoft(id).subscribe(data =>{
        this.ngOnInit();
    });
    }
  }

}
