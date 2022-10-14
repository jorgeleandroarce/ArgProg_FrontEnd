import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PorfolioService {

  url='http://localhost:8080/persona';
  //url= 'assets/data';

  constructor(private http:HttpClient) { }

  public obtenerDatos():Observable<any> {
    return this.http.get<any>(this.url+'/ver/1');
    //return this.http.get<any>(this.url+'/data.json');
  }
}
