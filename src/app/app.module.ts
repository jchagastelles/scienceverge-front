import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PesquisaPalavraComponent } from './pesquisa-palavra/pesquisa-palavra.component';
import { CriarPesquisaComponent } from './criar-pesquisa/criar-pesquisa.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PesquisaPalavraComponent,
    CriarPesquisaComponent
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
