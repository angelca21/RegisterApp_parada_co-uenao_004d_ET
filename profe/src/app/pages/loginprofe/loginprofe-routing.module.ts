import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginprofePage } from './loginprofe.page';

const routes: Routes = [
  {
    path: '',
    component: LoginprofePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginprofePageRoutingModule {}
