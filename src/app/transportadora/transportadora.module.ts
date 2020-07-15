import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransportadoraPage } from './transportadora.page';

import { TransportadoraPageRoutingModule } from './transportadora-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TransportadoraPageRoutingModule
  ],
  declarations: [TransportadoraPage]
})
export class TransportadoraPageModule {}
