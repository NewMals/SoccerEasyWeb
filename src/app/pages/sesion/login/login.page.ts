import { Router } from '@angular/router';
import { AuthenticationService } from './../../../providers/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  // providers: [AuthenticationService]
})
export class LoginPage implements OnInit {

  email: string = null;
  password: string = null;
  mensajeError: string;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  async SignInWithEmail(){
    try {
      await this.auth.signInWithEmail(this.email, this.password);
      this.router.navigate(["home"]);
    } catch (error) {
      this.mensajeError = error;
    } 
  }


  Register(){
    this.router.navigate(["create"]);
  }
}
