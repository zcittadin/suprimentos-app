import { Injectable } from '@angular/core';
import { Entrega } from '../model/entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  constructor() { }

  entregas: Entrega[] = [];

  editarEntrega(entrega:Entrega) {
    this.removerEntrega(entrega);
    this.adicionarEntrega(entrega);
  }

  adicionarEntrega(entrega:Entrega) {
    this.entregas.push(entrega);
  }

  removerEntrega (entrega:Entrega) {
    this.entregas = this.entregas.filter(e => e.id !== entrega.id);
  }

  getEntrega(id:number):Entrega {
    return this.getEntregas().find(e => e.id == id);
  }

  getEntregas() {
    return this.entregas;
  }
}
