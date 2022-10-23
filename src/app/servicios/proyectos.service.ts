import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../clases/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url='http://localhost:8080/proyectos';

  constructor(private http:HttpClient) { }

  public obtenerProyectos():Observable<any> {
    return this.http.get<any>(this.url+'/ver');
  }

  public obtenerUnProyecto(id : number):Observable<any> {
    return this.http.get<any>(this.url+`/una/${id}`);
  }

  public borrarProyectos(id : number):Observable<any> {
    return this.http.delete<any>(this.url+`/delete/${id}`);
  }

  public nuevoProyecto(proyecto:Proyectos):Observable<any> {
    return this.http.post<any>(this.url+'/new', proyecto);
  }

  public editarProyecto(id:number, proyecto:Proyectos):Observable<any> {
    return this.http.put<any>(this.url+`/editar/${id}`, proyecto);
  }
}
