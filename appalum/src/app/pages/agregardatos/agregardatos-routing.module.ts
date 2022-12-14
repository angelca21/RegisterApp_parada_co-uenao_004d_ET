import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregardatosPage } from './agregardatos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregardatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregardatosPageRoutingModule {}
