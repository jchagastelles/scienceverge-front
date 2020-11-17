import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';

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
      nome: titulo,
      pdf_url: urlPDF,
      comentario: comentario,
      isPrivate: true
    }
    this.http.post(this.url, pesquisa).subscribe(data => {
      console.log(data); // mostra resultado no console (para verificacao em testes)
    });
  }
}
