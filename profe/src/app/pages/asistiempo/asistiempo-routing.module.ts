import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistiempoPage } from './asistiempo.page';

const routes: Routes = [
  {
    path: '',
    component: AsistiempoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistiempoPageRoutingModule {}
