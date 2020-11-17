import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  cadastrar: string;
  addCadastro(name: string, password: number, email: string, phone: number, description: string) {
    // chamada backend
    this.cadastrar = 'http://localhost:8080/cadastro/create';
    const cadastrar = {
      nome: name,
      senha: password,
      endEmail: email,
      telefone: phone,
      descricao: description
    };

    this.http.post(this.cadastrar, cadastrar).subscribe(data => {
      console.log(data); // mostra resultado no console (para verificacao em testes)
    });
  }
}


