import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/clases/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educ',
  templateUrl: './edit-educ.component.html',
  styleUrls: ['./edit-educ.component.css']
})
export class EditEducComponent implements OnInit {

  educacion : any;

  constructor(private servicioEducacion:EducacionService, private router:ActivatedRoute, private ruta:Router) { }

  ngOnInit(): void {
    this.servicioEducacion.obtenerEducacion().subscribe(data =>{
      this.educacion=data;
    });
  }

  editEduc(): void {
    const id = this.router.snapshot.params['id'];
    this.servicioEducacion.editarEducacion(id, this.educacion).subscribe(
      data => { this.ruta.navigate(['']) },
      err => { alert("Ups! algo salió muy mal!");
      this.ruta.navigate(['']) }
    )
  }

}
