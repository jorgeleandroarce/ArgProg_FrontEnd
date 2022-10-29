import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  constructor(private authService: AutenticacionService, private ruta: Router) { }

  ngOnInit(): void {

  }

  logeado() {
    return this.authService.getToken();
  }

  onLogout() {
    this.authService.logOut()
      .then(() => {
        this.ruta.navigate(['']);
        window.location.reload();
      })
      .catch(error => console.log(error));
  }
}
