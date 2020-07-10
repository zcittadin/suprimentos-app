import { Component, OnInit } from '@angular/core';
import { Transportadora } from 'src/app/model/transportadora';
import { TransportadoraService } from 'src/app/services/transportadora.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  transportadora: Transportadora;

  constructor(private transportadoraService: TransportadoraService, private location: Location, public router: ActivatedRoute) {
    this.transportadora = {id: 0,dataCadastro: new Date(),endereco:'',nome:'',qtdeEntregas:null,telefone:''}
    if(this.router.snapshot.params.idTransportadora) {
      this.transportadora = this.transportadoraService.getTransportadora(this.router.snapshot.params.idTransportadora);
      return;
    }
  }

  ngOnInit() {}

  salvarTransportadora(transportadora:Transportadora) {
    if(transportadora.id) {
      this.transportadoraService.editarTransportadora(transportadora);
      this.location.back();
      return;
    }
    this.transportadora.id = parseInt((Math.random() * 1000).toFixed(0));
    this.transportadoraService.adicionarTransportadora(transportadora);
    this.location.back();
  }
}
