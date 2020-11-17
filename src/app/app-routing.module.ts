import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaPalavraComponent } from './pesquisa-palavra/pesquisa-palavra.component';
import { CriarPesquisaComponent } from './criar-pesquisa/criar-pesquisa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pesquisa-palavra', component: PesquisaPalavraComponent},
  { path: 'criar-pesquisa', component: CriarPesquisaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
