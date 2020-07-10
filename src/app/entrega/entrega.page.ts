import { Component } from '@angular/core';
import { Entrega } from '../model/entrega';
import { EntregaService } from '../services/entrega.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entrega',
  templateUrl: 'entrega.page.html',
  styleUrls: ['entrega.page.scss']
})
export class EntregaPage {

  constructor(private entregaService: EntregaService, public navCtrl: NavController, public router: Router) {}

  _entregas: Entrega[];

  get entregas() {
    return this.entregaService.getEntregas();
  }

  removerEntrega (entrega:Entrega) {
    this.entregaService.removerEntrega(entrega);
  }
}
