import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionServicio:AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var usuarioActual=this.autenticacionServicio.UsuarioAutenticado;

    if(usuarioActual && usuarioActual.accessToken){
      req=req.clone({
        setHeaders:{
          Authorization: "Bearer ${usuarioActual.accessToken}"
        }
      })
    }
    console.log("pero como corre este Interceptor! " + JSON.stringify(usuarioActual));

    return next.handle(req);

  }

}
