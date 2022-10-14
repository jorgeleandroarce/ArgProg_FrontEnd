import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  url="assets/data/data.json" //aca va la URL de la API de autenticación, que yo no la puedo poner porque aún no se como se construye. Deberia explicarlo la masterclass 9 pero no está! //
  currentUserSubjet: BehaviorSubject<any>;
  
  constructor(private http:HttpClient) { 
    console.log("...pero como corre este servicio!");
    this.currentUserSubjet= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('usuarioActual') || '{}'))
  }

  IniciarSesion(credenciales:any):Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      sessionStorage.setItem('usuarioActual', JSON.stringify(data));
      this.currentUserSubjet.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado() {
    return this.currentUserSubjet.value
  }

}
