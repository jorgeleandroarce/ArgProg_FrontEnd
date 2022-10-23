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
  
  formGrup:FormGroup;

  logueado = false;

  constructor (private formBuilder:FormBuilder, private ruta:Router, private authService:AutenticacionService) {
    
    this.formGrup=this.formBuilder.group(
      {
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
      }
    )
  }

  ngOnInit(): void {
  }

  get Email() {
    return this.formGrup.get('email')
  }

  get Password() {
    return this.formGrup.get('password')
  }

  public login(){
    if(this.authService.loginOk(this.formGrup.value)){
      alert("Acceso Autorizado!");
      this.logueado = true;
      this.ruta.navigate(['']);
    }
    else {alert ("algo falló! Usuario o Contraseña Incorrecta");
          this.logueado = false}
  }
}
