import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesSoft } from '../clases/habilidades-soft';


@Injectable({
  providedIn: 'root'
})

export class HabilidadessoftService {

  url='http://localhost:8080/habilidadessoft';
  
  constructor(private http:HttpClient) { }

  public obtenerHabilidadessoft():Observable<any> {
    return this.http.get<any>(this.url+'/ver');
  }

  public borrarHabilidadessoft(id : number):Observable<any> {
    return this.http.delete<any>(this.url+`/delete/${id}`);
  }

  public nuevaHabilidadsoft(habilidadesSoft:HabilidadesSoft):Observable<any> {
    return this.http.post<any>(this.url+'/new', habilidadesSoft);
  }
}

