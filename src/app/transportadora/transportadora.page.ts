import { Component } from '@angular/core';
import { Transportadora } from '../model/transportadora';

@Component({
  selector: 'app-transportadora',
  templateUrl: 'transportadora.page.html',
  styleUrls: ['transportadora.page.scss']
})
export class TransportadoraPage {

  transportadoras: Transportadora[];

  constructor() {
    this.transportadoras = [
      /*{dataCadastro: new Date(),endereco: 'dsadsd', nome: 'teste', qtdeEntregas: 2, telefone: '48998415545'},
      {dataCadastro: new Date(),endereco: 'Rua foda', nome: 'teste 2', qtdeEntregas: 0, telefone: '35692582080'},*/
    ]
  }

  removerTransportadora (transportadora:Transportadora) {
    this.transportadoras = this.transportadoras.filter(t => t !== transportadora);
  }
}
