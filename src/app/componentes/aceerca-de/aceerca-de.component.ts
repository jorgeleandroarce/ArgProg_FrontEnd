import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-aceerca-de',
  templateUrl: './aceerca-de.component.html',
  styleUrls: ['./aceerca-de.component.css']
})
export class AceercaDeComponent implements OnInit {

  persona:any;
  
  logueado = false;
  
 constructor(private servicioPorfolio:PorfolioService, private authService:AutenticacionService) { }

  ngOnInit(): void {
   this.mostrarPersona();
   if(this.authService.autorizado()){
    this.logueado = true; }
    else { this.logueado = false; }
  }

  mostrarPersona(): void {
    this.servicioPorfolio.obtenerMisDatos().subscribe(data =>{
      this.persona=data;
      });
  }

}
