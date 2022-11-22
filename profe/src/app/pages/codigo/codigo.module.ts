import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoPageRoutingModule } from './codigo-routing.module';

import { CodigoPage } from './codigo.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    CodigoPageRoutingModule
  ],
  declarations: [CodigoPage]
})
export class CodigoPageModule {}
