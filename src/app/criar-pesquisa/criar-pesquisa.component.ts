import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pesquisa',
  templateUrl: './criar-pesquisa.component.html',
  styleUrls: ['./criar-pesquisa.component.css']
})
export class CriarPesquisaComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  url: string;
  addPesquisa(titulo: string, urlPDF: string, comentario: string) {
    // chamada backend
    this.url = 'http://localhost:8080/pesquisa-cientifica/create';
    const pesquisa = {
      titulo: titulo,
      urlPDF: urlPDF,
      comentario: comentario
    }
    this.http.post(this.url, JSON.stringify(pesquisa)).subscribe(data => {
      console.log(data); // mostra resultado no console (para verificacao em testes)
    });
  }
}
