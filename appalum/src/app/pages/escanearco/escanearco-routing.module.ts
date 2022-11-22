import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanearcoPage } from './escanearco.page';

const routes: Routes = [
  {
    path: '',
    component: EscanearcoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanearcoPageRoutingModule {}
