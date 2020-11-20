import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }
  login : string;

  getLogin(name: string, password: number, email: string, phone: number, description: string) {
    // chamada backend
    this.login = 'http://localhost:8080/cadastro/login';
    const login = {
      endEmail: email,
      senha: password
    };

    this.http.get(this.login).subscribe(data => {
      console.log(data); // mostra resultado no console (para verificacao em testes)
    });
  }
}




