import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../clases/usuarios';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

 URL =  'http://localhost:8080/usuarios';

  logueado: boolean = false;
  
 constructor(private http:HttpClient) { }

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

  public loginDB(usuarios:Usuarios):Observable<any> {
    return this.http.post<any>(this.URL+'/un/100', usuarios);
  }
}
