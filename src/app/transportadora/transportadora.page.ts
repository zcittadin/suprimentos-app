import { Component } from '@angular/core';
import { Transportadora } from '../model/transportadora';
import { TransportadoraService } from '../services/transportadora.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transportadora',
  templateUrl: 'transportadora.page.html',
  styleUrls: ['transportadora.page.scss']
})
export class TransportadoraPage {

  constructor(private transportadoraService: TransportadoraService, public navCtrl: NavController, public router: Router) {}

  transportadoras: Transportadora[];

  get transportadoras() {
    return this.transportadoraService.getTransportadoras();
  }

  removerTransportadora (transportadora:Transportadora) {
    this.transportadoraService.removerTransportadora(transportadora);
  }
}
