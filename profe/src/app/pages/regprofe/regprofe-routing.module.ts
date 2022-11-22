import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegprofePage } from './regprofe.page';

const routes: Routes = [
  {
    path: '',
    component: RegprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegprofePageRoutingModule {}
