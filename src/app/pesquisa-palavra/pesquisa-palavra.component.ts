import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-palavra',
  templateUrl: './pesquisa-palavra.component.html',
  styleUrls: ['./pesquisa-palavra.component.css']
})

export class PesquisaPalavraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pesquisaPalavra(palavra: string) {
    if (palavra) {
      // chamada backend
    }
  }
}