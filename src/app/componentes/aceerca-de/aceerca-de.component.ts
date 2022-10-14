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
    this.servicioPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.persona=data;
    });
  }

}
