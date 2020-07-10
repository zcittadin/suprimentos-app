import { Component, OnInit } from '@angular/core';
import { Entrega } from 'src/app/model/entrega';
import { EntregaService } from 'src/app/services/entrega.service';
import { TransportadoraService } from 'src/app/services/transportadora.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { Transportadora } from 'src/app/model/transportadora';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  entrega: Entrega

  constructor(private entregaService: EntregaService, private transportadoraService: TransportadoraService, private location: Location, public router: ActivatedRoute, private pickerController: PickerController) {
    this.entrega = {id: 0,endereco:'',dataEntrega: new Date(), status: false,valor:null,
      transportadora: {id: 0,dataCadastro: new Date(),endereco:'',nome:'',qtdeEntregas:null,telefone:''}
    };
    if(this.router.snapshot.params.idEntrega) {
      this.entrega = this.entregaService.getEntrega(this.router.snapshot.params.idEntrega);
      return;
    }
  }

  ngOnInit() {}

  getTransportadorasPicker(): {text: string, value: Transportadora}[] {
    let options = [];
    let transportadoras = this.transportadoraService.getTransportadoras();
    for(let transportadora of transportadoras) {
      options.push({ text: transportadora.nome, value: transportadora });
    }
    return options;
  }

  async pickTransportadora() {
    let options: PickerOptions = {
      buttons: [{
          text: "Cancel",
          role: 'cancel'
        }, {
          text:'Ok',
          handler:(option:any) => {
            this.entrega.transportadora = option.Transportadora.value;
          }
        }
      ],
      columns:[{
        name:'Transportadora',
        options: this.getTransportadorasPicker()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present();
  }

  salvarEntrega(entrega:Entrega) {
    if(entrega.id) {
      this.entregaService.editarEntrega(entrega);
      this.location.back();
      return;
    }
    this.entrega.id = parseInt((Math.random() * 1000).toFixed(0));
    this.entregaService.adicionarEntrega(entrega);
    this.location.back();
  }
}
