import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto:any;  

  constructor(private servicioPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.servicioPorfolio.obtenerMisDatos().subscribe(data =>{
    this.contacto=data;
    });
  }

}
