import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntregaPage } from './entrega.page';

const routes: Routes = [
  {
    path: '',
    component: EntregaPage,
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregaPageRoutingModule {}
