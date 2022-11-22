import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InciarsePageRoutingModule } from './inciarse-routing.module';

import { InciarsePage } from './inciarse.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InciarsePageRoutingModule
  ],
  declarations: [InciarsePage]
})
export class InciarsePageModule {}
