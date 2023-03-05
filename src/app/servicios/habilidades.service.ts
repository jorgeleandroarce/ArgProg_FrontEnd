import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../clases/habilidades';

@Injectable({
  providedIn: 'root'
})

export class HabilidadesService {

  //url='http://localhost:8080/habilidadeshard';
  url='https://backend-argprog-zer6.onrender.com/habilidadeshard';
  
  constructor(private http:HttpClient) { }

  public obtenerHabilidades():Observable<any> {
    return this.http.get<any>(this.url+'/ver');
  }

  public borrarHabilidades(id : number):Observable<any> {
    return this.http.delete<any>(this.url+`/delete/${id}`);
  }

  public nuevaHabilidad(habilidades:Habilidades):Observable<any> {
    return this.http.post<any>(this.url+'/new', habilidades);
  }
}
