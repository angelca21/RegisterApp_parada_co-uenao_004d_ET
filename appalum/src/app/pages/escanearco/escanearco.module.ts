import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearcoPageRoutingModule } from './escanearco-routing.module';

import { EscanearcoPage } from './escanearco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearcoPageRoutingModule
  ],
  declarations: [EscanearcoPage]
})
export class EscanearcoPageModule {}
