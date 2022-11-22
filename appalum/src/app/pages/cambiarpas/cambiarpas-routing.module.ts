import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarpasPage } from './cambiarpas.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarpasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarpasPageRoutingModule {}
