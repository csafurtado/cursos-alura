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
}
