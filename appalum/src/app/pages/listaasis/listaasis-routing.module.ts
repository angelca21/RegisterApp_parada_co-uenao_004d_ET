import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaasisPage } from './listaasis.page';

const routes: Routes = [
  {
    path: '',
    component: ListaasisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaasisPageRoutingModule {}
