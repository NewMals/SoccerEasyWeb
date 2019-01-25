import { Usuario } from './../../models/usuario';
import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { throwError, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firebase: FirebaseApp, private router: Router) { 
    this.StateSesion();
  }

  async createUserEmail(user: Usuario, password: string) {
    let respuesta = "";
    try {
      await this.firebase.auth().createUserWithEmailAndPassword(user.USUemail, password);
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use': {
          respuesta = "La dirección de correo electrónico ya está siendo utilizada por otra cuenta."
          break;
        }
        case 'auth/invalid-email': {
          respuesta = "Correo no valido";
          break;
        }
        default: {
          respuesta = "Error del servidor, pongase en contacto con el administrador"
          break;
        }
      }
      throw respuesta;
    }
  }


  async signInWithEmail(email: string, password: string) {
    let respuesta = "";
    try {
      await this.firebase.auth().signInWithEmailAndPassword(email, password);
    }
    catch (error) {
      switch (error.code) {
        case 'auth/invalid-email': {
          respuesta = "Correo y/o contraseña incorrectos";
          break;
        }
        case 'auth/user-not-found': {
          respuesta = "Usuario no registrado";
          break;
        }
        case 'auth/wrong-password': {
          respuesta = "Contraseña incorrecta";
          break;
        }
        case 'auth/too-many-requests': {
          respuesta = "Cuenta bloqueada temporalmente debido a una actividad inusual";
          break;
        }
        default: {
          respuesta = "Error del servidor, pongase en contacto con el administrador"
          break;
        }
      }
      throw respuesta;
    }
  }

  StateSesion() {
    return this.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return true;
      }
      else {
        this.router.navigate(['login']);
        return false;
      }
    });
  }

  openDB(): Promise<IDBOpenDBRequest> {
    return new Promise((resolve) => {
      let request = indexedDB.open("firebaseLocalStorageDb");
      request.onsuccess = (event: any) => {
        let data : IDBOpenDBRequest = event.target;
        resolve(data);
      }
    });
  }

  DBRequestCount(registros: IDBRequest<number>): Promise<IDBRequest<number>>{
    return new Promise((resolve) =>{
        registros.onsuccess = (event: any) =>{
          let data : IDBRequest<number> = event.target;
          resolve(data);
        }
    });
  }
}
