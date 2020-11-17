import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaPalavraComponent } from './pesquisa-palavra/pesquisa-palavra.component';
import { CriarPesquisaComponent } from './criar-pesquisa/criar-pesquisa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarProfileComponent } from './editar-profile/editar-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pesquisa-palavra', component: PesquisaPalavraComponent},
  { path: 'criar-pesquisa', component: CriarPesquisaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'editar-profile', component: EditarProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
