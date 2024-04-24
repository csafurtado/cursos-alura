import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})

export class CriarPensamentoComponent implements OnInit {

  teste = 'teste';

  pensamento = {
    id:'1',
    conteudo : 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
    placeholder: "No que vc está pensando?",
  }

  criarPensamento(){
    alert('Pensamento criado com sucesso!')
    console.log(this.pensamento.modelo)
  }

  cancelarPensamento(){
    alert('Pensamento cancelado com sucesso!')
  }

  verificaModelo(modelo: string){
    console.log(modelo)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
