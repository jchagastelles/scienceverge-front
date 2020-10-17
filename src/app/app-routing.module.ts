import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaPalavraComponent } from './pesquisa-palavra/pesquisa-palavra.component';
import { CriarPesquisaComponent } from './criar-pesquisa/criar-pesquisa.component';

const routes: Routes = [
  { path: 'pesquisa-palavra', component: PesquisaPalavraComponent},
  { path: 'criar-pesquisa', component: CriarPesquisaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
