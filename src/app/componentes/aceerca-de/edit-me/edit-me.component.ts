import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/clases/persona';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-edit-me',
  templateUrl: './edit-me.component.html',
  styleUrls: ['./edit-me.component.css']
})
export class EditMeComponent implements OnInit {

  persoEdit: Persona = null;

  constructor(private servicioPorfolio:PorfolioService, private router:ActivatedRoute, private ruta:Router) { }

  ngOnInit(): void {
    const id = this.router.snapshot.params['id'];
    this.servicioPorfolio.obtenerUnaPer(id).subscribe(data => {
      this.persoEdit=data
    })
  }

  editMe(): void {
    const id = this.router.snapshot.params['id'];
    this.servicioPorfolio.editarPersona(id, this.persoEdit).subscribe(
      data => { alert("Edicion Realizada!"); this.ruta.navigate(['']) },
      err => { alert("Ups! algo salió muy mal!"); this.ruta.navigate(['']) }
    )
  }

}
