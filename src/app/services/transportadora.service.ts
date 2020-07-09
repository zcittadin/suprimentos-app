import { Injectable } from '@angular/core';
import { Transportadora } from '../model/transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  transportadoras: Transportadora[] = [];

  constructor() {}

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
