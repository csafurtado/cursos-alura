import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3001/pensamentos'; // API que será consumida pelo serviço de pensamentos (esse é o backend da aplicação)

  constructor(private httpCliente : HttpClient) { }

  // Cria um componente observável, ou seja, verifica se há mudanças no serviço de pensamentos
  listar(): Observable<Pensamento[]> {
    return this.httpCliente.get<Pensamento[]>(this.API);
  }

  // Cria um componente observável, ou seja, irá colocar no BD o pensamento em questão através do serviço
  cadastrar(pensamento: Pensamento): Observable<Pensamento> {
    return this.httpCliente.post<Pensamento>(this.API, pensamento);
  }

  // Cria um componente observável, ou seja, irá editar/atualizar o conteúdo de um pensamento no BD através do serviço
  editar(pensamento : Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.httpCliente.put<Pensamento>(url, pensamento);
  }

  // Criar um componente observável, ou seja, irá deletar um pensamento no BD através do serviço
  excluir(id : Number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.httpCliente.delete<Pensamento>(url);
  }

  // Criar um componente observável, ou seja, irá buscar um pensamento no BD através do serviço
  buscarPorId(id : Number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.httpCliente.get<Pensamento>(url);
  }
}
