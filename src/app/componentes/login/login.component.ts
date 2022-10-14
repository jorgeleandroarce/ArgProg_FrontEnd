import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  form:FormGroup;

  constructor (private formBuilder:FormBuilder, 
              private autenticacionService:AutenticacionService, 
              private ruta:Router) {
    
    this.form=this.formBuilder.group(
      {
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
        //aca va algo mas que se llama DeviceInfo que no se para que sirve ni como se obtiene. Está en la master class 8.2 que no entiendo de donde lo saco la profesora, aparentemente se crea primero en una API, pero eso no esta explicado en nigun lado. La masterclass 9 lo muestra, pero no lo enseña.//
      }
    )
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.form.get('email')
  }

  get Password() {
    return this.form.get('password')
  }

  onEnviar(event:Event) {
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/fullporfolio']);
    })
  }

}
