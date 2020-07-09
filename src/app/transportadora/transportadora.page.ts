import { Component } from '@angular/core';
import { Transportadora } from '../model/transportadora';
import { TransportadoraService } from '../services/transportadora.service';

@Component({
  selector: 'app-transportadora',
  templateUrl: 'transportadora.page.html',
  styleUrls: ['transportadora.page.scss']
})
export class TransportadoraPage {

  constructor(private transportadoraService: TransportadoraService) {}

  transportadoras: Transportadora[];

  get transportadoras() {
    return this.transportadoraService.getTransportadoras();
  }

  removerTransportadora (transportadora:Transportadora) {
    this.transportadoraService.removerTransportadora(transportadora);
  }
}
