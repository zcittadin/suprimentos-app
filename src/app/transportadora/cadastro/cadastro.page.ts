import { Component, OnInit } from '@angular/core';
import { Transportadora } from 'src/app/model/transportadora';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  transportadora: Transportadora;

  constructor() {
    this.transportadora = {dataCadastro: new Date(),endereco:'',nome:'',qtdeEntregas:0,telefone:''}
  }

  ngOnInit() {
  }
}
