import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EntregaPage } from './entrega.page';

import { EntregaPageRoutingModule } from './entrega-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EntregaPageRoutingModule
  ],
  declarations: [EntregaPage]
})
export class EntregaPageModule {}
