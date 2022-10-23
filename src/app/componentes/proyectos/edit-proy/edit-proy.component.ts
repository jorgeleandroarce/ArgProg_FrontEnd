import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/clases/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-edit-proy',
  templateUrl: './edit-proy.component.html',
  styleUrls: ['./edit-proy.component.css']
})
export class EditProyComponent implements OnInit {

  proyEdit: Proyectos = null;
  
 constructor(private servicioProyectos:ProyectosService, private router:ActivatedRoute, private ruta:Router) { }

 ngOnInit(): void {
  const id = this.router.snapshot.params['id'];
  this.servicioProyectos.obtenerUnProyecto(id).subscribe(data => {
    this.proyEdit=data
  })
}

editProy(): void {
  const id = this.router.snapshot.params['id'];
  this.servicioProyectos.editarProyecto(id, this.proyEdit).subscribe(
    data => { alert("Edicion Realizada!"); this.ruta.navigate(['']) },
    err => { alert("Ups! algo salió muy mal!"); this.ruta.navigate(['']) }
  )
}

}
