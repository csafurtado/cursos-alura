import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})

export class PensamentoComponent implements OnInit {
  @Input() pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento() : string {
    return this.pensamento.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

}
