import { LoginGuard } from './guard/login/login.guard';
import { HomeGuard } from 'src/app/guard/home/home.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' , canActivate: [HomeGuard] },
  { path: 'login', loadChildren: './pages/sesion/login/login.module#LoginPageModule', canActivate: [LoginGuard]},
  { path: 'create', loadChildren: './pages/sesion/create-account/create-account.module#CreateAccountPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
