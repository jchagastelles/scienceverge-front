import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';

@Component({
  selector: 'app-editar-profile',
  templateUrl: './editar-profile.component.html',
  styleUrls: ['./editar-profile.component.css']
})
export class EditarProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  editar: string;
  changeCadastro(name: string, password: number, email: string, phone: number, description: string) {
    // chamada backend
    this.editar = 'http://localhost:8080/cadastro/create';
    const editar = {
      nome: name,
      senha: password,
      email: email,
      telefone: phone,
      descricao: description
    };

    this.http.post(this.editar, editar).subscribe(data => {
      console.log(data); // mostra resultado no console (para verificacao em testes)
    });
  }
}






