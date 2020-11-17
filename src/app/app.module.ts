import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaPalavraComponent } from './pesquisa-palavra/pesquisa-palavra.component';
import { CriarPesquisaComponent } from './criar-pesquisa/criar-pesquisa.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HttpClientModule } from '@angular/common/http';
import { InvestidorComponent } from './investidor/investidor.component';
import { EditarProfileComponent } from './editar-profile/editar-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PesquisaPalavraComponent,
    CriarPesquisaComponent,
    LoginComponent,
    HomeComponent,
    CadastrarComponent,
    InvestidorComponent,
    EditarProfileComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
