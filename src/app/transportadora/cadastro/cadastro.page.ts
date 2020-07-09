import { Component, OnInit } from '@angular/core';
import { Transportadora } from 'src/app/model/transportadora';
import { TransportadoraService } from 'src/app/services/transportadora.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  transportadora: Transportadora;

  constructor(private transportadoraService: TransportadoraService, public navCtrl: NavController) {
    this.transportadora = {id: parseInt((Math.random() * 1000).toFixed(0)),dataCadastro: new Date(),endereco:'',nome:'',qtdeEntregas:0,telefone:''}
  }

  ngOnInit() {
  }

  salvarTransportadora(transportadora:Transportadora) {
    this.transportadoraService.adicionarTransportadora(transportadora);
    this.navCtrl.pop();
  }
}
