import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../clases/persona';

@Injectable({
  providedIn: 'root'
})

export class PorfolioService {

  //url='http://localhost:8080/persona';
  url='https://porfolioarcejleandro.herokuapp.com/persona';
  
  constructor(private http:HttpClient) { }

  public obtenerMisDatos():Observable<any> {
    return this.http.get<any>(this.url+'/ver/1');
  }

  public obtenerUnaPer(id : number):Observable<any> {
    return this.http.get<any>(this.url+`/ver/${id}`);
  }

  public editarPersona(id:number, persona:Persona):Observable<any> {
    return this.http.put<any>(this.url+`/editar/${id}`, persona);
  }
}
