import { Injectable } from '@angular/core';
import { Transportadora } from '../model/transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  transportadoras: Transportadora[];

  constructor() {
    this.transportadoras = [
      {id: parseInt((Math.random() * 1000).toFixed(0)), dataCadastro: new Date(),endereco: 'dsadsd', nome: 'teste', qtdeEntregas: 2, telefone: '48998415545'},
      {id: parseInt((Math.random() * 1000).toFixed(0)), dataCadastro: new Date(),endereco: 'Rua foda', nome: 'teste 2', qtdeEntregas: 0, telefone: '35692582080'},
    ]
  }

  adicionarTransportadora(transportadora:Transportadora) {
    this.transportadoras.push(transportadora);
  }

  removerTransportadora (transportadora:Transportadora) {
    this.transportadoras = this.transportadoras.filter(t => t.id !== transportadora.id);
  }

  getTransportadoras() {
    return this.transportadoras;
  }
}
