import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  logueado = false;

  constructor(private authService:AutenticacionService) { }

  ngOnInit(): void {  
    if(this.authService.autorizado()){
      this.logueado = true; }
      else { this.logueado = false }
  }

  cerrar(): void{
    this.authService.cerrarSesion();
    window.location.reload();
  }

  
  
}
