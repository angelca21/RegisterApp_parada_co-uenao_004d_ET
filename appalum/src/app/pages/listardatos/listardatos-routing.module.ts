import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListardatosPage } from './listardatos.page';

const routes: Routes = [
  {
    path: '',
    component: ListardatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListardatosPageRoutingModule {}
