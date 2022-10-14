import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  habilidadesHardList:any;
  
  constructor(private datosHabilidades:HabilidadesService) { }

  ngOnInit(): void {
    this.datosHabilidades.obtenerHabilidades().subscribe(data =>{
    this.habilidadesHardList=data;
   });
  }

  borrarHab(id? : number){
    if(id != undefined){
      this.datosHabilidades.borrarHabilidades(id).subscribe(data =>{
        this.ngOnInit();
    });
    }
  }

}
