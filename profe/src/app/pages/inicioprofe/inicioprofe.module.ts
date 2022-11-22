import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioprofePageRoutingModule } from './inicioprofe-routing.module';

import { InicioprofePage } from './inicioprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioprofePageRoutingModule
  ],
  declarations: [InicioprofePage]
})
export class InicioprofePageModule {}
