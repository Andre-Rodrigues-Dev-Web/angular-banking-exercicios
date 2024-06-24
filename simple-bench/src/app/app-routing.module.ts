import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Pages
import { WelcomeComponent } from './views/welcome/welcome.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MeuCartaoComponent } from './views/meu-cartao/meu-cartao.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
