import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full'},
  { path: '/home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
