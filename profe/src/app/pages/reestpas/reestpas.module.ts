import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReestpasPageRoutingModule } from './reestpas-routing.module';

import { ReestpasPage } from './reestpas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReestpasPageRoutingModule
  ],
  declarations: [ReestpasPage]
})
export class ReestpasPageModule {}
