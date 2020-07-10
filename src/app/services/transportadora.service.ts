import { Injectable } from '@angular/core';
import { Transportadora } from '../model/transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {

  constructor() {}

  transportadoras: Transportadora[] = [];

  editarTransportadora(transportadora:Transportadora) {
    this.removerTransportadora(transportadora);
    this.adicionarTransportadora(transportadora);
  }

  adicionarTransportadora(transportadora:Transportadora) {
    this.transportadoras.push(transportadora);
  }

  removerTransportadora (transportadora:Transportadora) {
    this.transportadoras = this.transportadoras.filter(t => t.id !== transportadora.id);
  }

  getTransportadora(id:number):Transportadora {
    return this.getTransportadoras().find(t => t.id == id);
  }

  getTransportadoras() {
    return this.transportadoras;
  }
}
