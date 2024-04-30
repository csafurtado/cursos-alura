import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  teste = 'teste';

  pensamento : Pensamento = {
    conteudo : '',
    autoria: '',
    modelo: '',
  }

  placeholder = "No que vc está pensando?";

  // Registra o pensamento no BD através do serviço de pensamentos utilizando o método post (cadastrar)
  criarPensamento(){
    this.servicoPensamento.cadastrar(this.pensamento).subscribe((pensamento) => {
      this.roteador.navigate(['/listarPensamento']) // Redireciona para a página de listagem de pensamentos após a criação do pensamento
    })
  }

  cancelarPensamento(){
    this.roteador.navigate(['/listarPensamento'])
  }

  verificaModelo(modelo: string){
    console.log(modelo)
  }

  constructor(private servicoPensamento : PensamentoService, // Responsável por comunicar com o Backend
              private roteador : Router   // Responsável por redirecionar para outras páginas, pode até substituir o atributo routerLink no elemento html respectivo
  ) { }

  ngOnInit(): void {
  }

}
