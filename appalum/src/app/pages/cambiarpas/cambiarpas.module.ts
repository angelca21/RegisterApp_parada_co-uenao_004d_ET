import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarpasPageRoutingModule } from './cambiarpas-routing.module';

import { CambiarpasPage } from './cambiarpas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarpasPageRoutingModule
  ],
  declarations: [CambiarpasPage]
})
export class CambiarpasPageModule {}
