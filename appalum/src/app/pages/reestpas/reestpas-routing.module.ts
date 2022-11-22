import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReestpasPage } from './reestpas.page';

const routes: Routes = [
  {
    path: '',
    component: ReestpasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReestpasPageRoutingModule {}
