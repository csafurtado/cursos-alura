import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento : Pensamento = {
    id: 0,
    conteudo : '',
    autoria: '',
    modelo: '',
  }
  
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Pega o id do pensamento que será editado a partir da rota atual
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => { // Busca o pensamento no BD através do serviço
      this.pensamento = pensamento;
    })
  }
  
  // Edita o pensamento no BD através do serviço
  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']) // Redireciona para a página de listagem de pensamentos após a edição do pensameno
    }) 
   }

  cancelar() { 
    this.router.navigate(['/listarPensamento'])
  }

}
