import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransportadoraPage } from './transportadora.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TransportadoraPageRoutingModule } from './transportadora-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TransportadoraPageRoutingModule
  ],
  declarations: [TransportadoraPage]
})
export class TransportadoraPageModule {}
