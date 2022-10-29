import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  constructor(private authFire: Auth, private cookie:CookieService) { }

  token: string;

  public login({ email, password }: any) {
    return signInWithEmailAndPassword(this.authFire, email, password).then(
      response => {
        this.authFire.currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookie.set("token", this.token)
          })
      });
  }
  
  public getToken(){
    return this.cookie.get("token");
  }


  public logOut() {
    return signOut(this.authFire).then(()=>{
      this.token="";
      this.cookie.set("token", this.token)
    });
  }
}