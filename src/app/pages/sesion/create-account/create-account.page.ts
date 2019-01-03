import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/providers/authentication/authentication.service';
import { Errores } from "src/app/models/errores";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  usuario = new Usuario;
  password: string = "";
  confirmPassword: string = "";
  Habilitar: boolean = false;
  sizePass: boolean = false;
  mensajeError: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  confirmPass(event) {
    this.sizePass = (this.password.length > 7) ? false : true;
    this.Habilitar = ((this.password == this.confirmPassword) && this.password.length > 7) ? true : false;
  }

  async createAccount(){
    if ((this.password.length > 7) && (this.password == this.confirmPassword) && (this.usuario.USUemail)) {
      try {
        await this.auth.createUserEmail(this.usuario, this.password);      
      } catch (error) {
        this.mensajeError = error;
      }      
    }
    else{
      this.mensajeError = Errores["00"];
    }
  }
}
