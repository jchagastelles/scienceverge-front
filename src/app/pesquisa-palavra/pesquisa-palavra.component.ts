import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-palavra',
  templateUrl: './pesquisa-palavra.component.html',
  styleUrls: ['./pesquisa-palavra.component.css']
})

export class PesquisaPalavraComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  url = 'http://localhost:8080/pesquisa-cientifica/'
  pesquisaPalavra(palavra: string) {
    if (palavra) {
      // chamada backend
      this.http.get(this.url.concat(palavra)).toPromise().then( data => {
        console.log(data); // mostra resultado no console (para verificacao em testes)
      }
      )
    }
  }
}