import { HomePageModule } from './pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './providers/authentication/authentication.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyAUbPHkAQHVaXWahwL_M0zRybUtmKZG-IA",
  authDomain: "soccereasy-01.firebaseapp.com",
  databaseURL: "https://soccereasy-01.firebaseio.com",
  projectId: "soccereasy-01",
  storageBucket: "soccereasy-01.appspot.com",
  messagingSenderId: "824862985390"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule
    , IonicModule.forRoot()
    , AppRoutingModule
    , AngularFireModule.initializeApp(firebaseConfig)
    , HomePageModule
    , AngularFireAuthModule
  ],    
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    , AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
