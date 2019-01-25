import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/providers/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private auth: AuthenticationService, private router: Router) {

  }

  async canActivate() {
    const db = await this.auth.openDB();
    let cantidad = db.result.transaction("firebaseLocalStorage").objectStore("firebaseLocalStorage").count();
    const data = await this.auth.DBRequestCount(cantidad);
    if (data.result > 0){
      this.router.navigate(['home']);
      return false;
    }
    else
      return true;
  }

}
