import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabilidadesSoft } from 'src/app/clases/habilidades-soft';
import { HabilidadessoftService } from 'src/app/servicios/habilidadessoft.service';

@Component({
  selector: 'app-new-hab-soft',
  templateUrl: './new-hab-soft.component.html',
  styleUrls: ['./new-hab-soft.component.css']
})
export class NewHabSoftComponent implements OnInit {

  tipo: string ='';
  puntaje: string ='';

  constructor(private servicioHabilidadesSoft: HabilidadessoftService , private ruta: Router) { }

  ngOnInit(): void {
  }

  newHabS(): void {
    const HabS = new HabilidadesSoft(this.tipo, this.puntaje);
    this.servicioHabilidadesSoft.nuevaHabilidadsoft(HabS).subscribe(data =>{
      alert("añadiste una nueva Habilidad!");
      this.ruta.navigate(['']);
    }, err =>{
      alert("algo falló");
      this.ruta.navigate(['']);
    }
    )
  }

}
