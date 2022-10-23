import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../clases/experiencia';

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {

  url='http://localhost:8080/experiencia';

  constructor(private http:HttpClient) { }

  public obtenerExperiencia():Observable<any> {
    return this.http.get<any>(this.url+'/ver');
  }

  public obtenerUnaExp(id : number):Observable<any> {
    return this.http.get<any>(this.url+`/una/${id}`);
  }

  public borrarExperiencia(id : number):Observable<any> {
    return this.http.delete<any>(this.url+`/delete/${id}`);
  }

  public nuevaExperiencia(experiencia:Experiencia):Observable<any> {
    return this.http.post<any>(this.url+'/new', experiencia);
  }

  public editarExperiencia(id:number, experiencia:Experiencia):Observable<any> {
    return this.http.put<any>(this.url+`/editar/${id}`, experiencia);
  }
}
