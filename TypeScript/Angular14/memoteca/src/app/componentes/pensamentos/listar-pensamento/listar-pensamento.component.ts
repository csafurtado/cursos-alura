import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos : Pensamento[] = []

  constructor(private servico: PensamentoService) { }

  ngOnInit(): void {

    // Se inscreve no serviço de pensamentos, atualizando a lista de pensamentos coletando os dados do serviço pelo método get definido no observador
    this.servico.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
