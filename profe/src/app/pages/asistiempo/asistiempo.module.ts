import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistiempoPageRoutingModule } from './asistiempo-routing.module';

import { AsistiempoPage } from './asistiempo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistiempoPageRoutingModule
  ],
  declarations: [AsistiempoPage]
})
export class AsistiempoPageModule {}
