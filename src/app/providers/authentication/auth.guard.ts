import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router){

  }

  canActivate() {
     this.auth.isLoggedIn.subscribe(sesion => {
        if(!sesion){
          this.router.navigate(['login']);
          return false;
        }
     });

     return this.auth.isLoggedIn;
  }
}
