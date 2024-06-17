import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento : Pensamento = {
    conteudo : '',
    autoria: '',
    modelo: '',
  }
  constructor(
    private service: PensamentoService,
    private Router: Router,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Pega o id do pensamento que será excluído a partir da rota atual
    this.service.buscarPorId(Number(id!)).subscribe((pensamento) => { // Busca o pensamento no BD através do serviço
      this.pensamento = pensamento;
    })
  }


  excluirPensamento(){
    if (this.pensamento.id == null) return; // Se o id do pensamento for nulo, retorna (não faz nada
    this.service.excluir(this.pensamento.id!).subscribe(() => { // Exclui o pensamento no BD através do serviço, garantindo que o id do pensamento não seja nulo
      this.Router.navigate(['/listarPensamento']) // Redireciona para a página de listagem de pensamentos após a exclusão do pensamento
    })
  }

  cancelar() {
    this.Router.navigate(['/listarPensamento'])
  }
}
