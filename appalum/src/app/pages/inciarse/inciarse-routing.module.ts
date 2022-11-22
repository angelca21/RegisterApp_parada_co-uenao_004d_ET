import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InciarsePage } from './inciarse.page';

const routes: Routes = [
  {
    path: '',
    component: InciarsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InciarsePageRoutingModule {}
