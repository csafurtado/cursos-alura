import { Component, OnInit, Input } from '@angular/core';
import { Pensamento } from '../pensamento';


@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})

export class PensamentoComponent implements OnInit {
  @Input() pensamento : Pensamento = {
    id: 0,
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
