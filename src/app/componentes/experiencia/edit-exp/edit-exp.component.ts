import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/clases/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  expEdit: Experiencia = null;

  constructor(private servicioExperiencia:ExperienciaService, private router:ActivatedRoute, private ruta:Router) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.servicioExperiencia.obtenerUnaExp(id).subscribe(data => {
      this.expEdit=data
    })
  }

  editExp(): void {
    const id = this.router.snapshot.params['id'];
    this.servicioExperiencia.editarExperiencia(id, this.expEdit).subscribe(
      data => { alert("Edicion Realizada!"); this.ruta.navigate(['']) },
      err => { alert("Ups! algo salió muy mal!"); this.ruta.navigate(['']) }
    )
  }

}
