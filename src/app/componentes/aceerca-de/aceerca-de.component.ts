import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-aceerca-de',
  templateUrl: './aceerca-de.component.html',
  styleUrls: ['./aceerca-de.component.css']
})
export class AceercaDeComponent implements OnInit {

  persona:any;
  
constructor(private servicioPorfolio:PorfolioService) { }

  ngOnInit(): void {
   this.mostrarPersona();
  }

  mostrarPersona(): void {
    this.servicioPorfolio.obtenerMisDatos().subscribe(data =>{
      this.persona=data;
      });
  }

}
