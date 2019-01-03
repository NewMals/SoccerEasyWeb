import { AuthGuard } from 'src/app/providers/authentication/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' , canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './pages/sesion/login/login.module#LoginPageModule'},
  { path: 'create', loadChildren: './pages/sesion/create-account/create-account.module#CreateAccountPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
