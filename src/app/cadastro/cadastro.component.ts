import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  url: string;
  addCadastro(name: string, password: Int32Array, email: string, description: string) {
    // chamada backend
    this.url = 'http://localhost:8080/cadastro/create';
    const cadastro = {
      nome: name,
      senha: password,
      email: email,
      descricao: description,
      isPrivate: true
    }
    this.http.post(this.url, cadastro).subscribe(data => {
      console.log(data); // mostra resultado no console (para verificacao em testes)
    });
  }
}

