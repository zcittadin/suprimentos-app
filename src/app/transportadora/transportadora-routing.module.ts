import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportadoraPage } from './transportadora.page';

const routes: Routes = [
  {
    path: '',
    component: TransportadoraPage,
  },  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportadoraPageRoutingModule {}
