import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../clases/educacion';

@Injectable({
  providedIn: 'root'
})

export class EducacionService {

  //url='http://localhost:8080/educacion';
  url='https://porfolioarcejleandro.herokuapp.com/educacion';

  constructor(private http:HttpClient) { }

  public obtenerEducacion():Observable<any> {
    return this.http.get<any>(this.url+'/ver');
  }

  public obtenerUnaEdu(id : number):Observable<any> {
    return this.http.get<any>(this.url+`/una/${id}`);
  }

  public borrarEducacion(id:number):Observable<any> {
    return this.http.delete<any>(this.url+`/delete/${id}`);
  }

  public nuevaEducacion(educacion:Educacion):Observable<any> {
    return this.http.post<any>(this.url+'/new', educacion);
  }

  public editarEducacion(id:number, educacion:Educacion):Observable<any> {
    return this.http.put<any>(this.url+`/editar/${id}`, educacion);
  }

}
