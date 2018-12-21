import { Injectable } from '@angular/core';
import { LoginPageModule } from 'src/app/pages/login/login.module';

@Injectable({
  providedIn: LoginPageModule
})
export class AuthenticationService {

  constructor() { }
}
