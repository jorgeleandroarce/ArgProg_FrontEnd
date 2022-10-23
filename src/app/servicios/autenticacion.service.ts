import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

 logueado: boolean = false;
  
 constructor() { }

 public loginOk(obj:any):boolean{
  this.logueado = obj.email == 'jorgeleandro.arce@gmail.com' && obj.password =='12345678';
  return this.logueado;
  }

  public autorizado(){
    return this.logueado;
  }

  public cerrarSesion():void{
    window.sessionStorage.clear();
  }

}
