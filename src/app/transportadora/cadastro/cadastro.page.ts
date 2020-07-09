import { Component, OnInit } from '@angular/core';
import { Transportadora } from 'src/app/model/transportadora';
import { TransportadoraService } from 'src/app/services/transportadora.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  transportadora: Transportadora;

  constructor(private transportadoraService: TransportadoraService, public navCtrl: NavController, public router: ActivatedRoute) {
    this.transportadora = {id: 0,dataCadastro: new Date(),endereco:'',nome:'',qtdeEntregas:0,telefone:''}
    if(this.router.snapshot.params.idTransportadora) {
      this.transportadora = this.transportadoraService.getTransportadora(this.router.snapshot.params.idTransportadora);
      return;
    }
  }

  ngOnInit() {
    
  }

  salvarTransportadora(transportadora:Transportadora) {
    if(transportadora.id) {
      this.transportadoraService.editarTransportadora(transportadora);
      this.navCtrl.pop();
      return;
    }
    this.transportadora.id = parseInt((Math.random() * 1000).toFixed(0));
    this.transportadoraService.adicionarTransportadora(transportadora);
    this.navCtrl.pop();
  }
}
