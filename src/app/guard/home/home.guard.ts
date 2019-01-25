import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../../providers/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private auth: AuthenticationService) {

  }

  async canActivate() {
    const db = await this.auth.openDB();
    let cantidad = db.result.transaction("firebaseLocalStorage").objectStore("firebaseLocalStorage").count();
    const data = await this.auth.DBRequestCount(cantidad);
    if (data.result > 0)
      return true;
    else
      return false;
  }

  
}
