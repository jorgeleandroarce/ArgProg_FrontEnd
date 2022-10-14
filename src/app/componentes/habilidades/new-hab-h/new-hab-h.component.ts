import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/clases/habilidades';
import { HabilidadesService } from 'src/app/servicios/habilidades.service';

@Component({
  selector: 'app-new-hab-h',
  templateUrl: './new-hab-h.component.html',
  styleUrls: ['./new-hab-h.component.css']
})
export class NewHabHComponent implements OnInit {

  tipo: string ='';
  puntaje: string ='';

  constructor(private servicioHabilidades: HabilidadesService, private ruta: Router) { }

  ngOnInit(): void {
  }

  newHabH(): void {
    const HabH = new Habilidades (this.tipo, this.puntaje);
    this.servicioHabilidades.nuevaHabilidad(HabH).subscribe(data =>{
      alert("añadiste una nueva Habilidad!");
      this.ruta.navigate(['']);
    }, err =>{
      alert("algo falló");
      this.ruta.navigate(['']);
    }
    )
  }

}
