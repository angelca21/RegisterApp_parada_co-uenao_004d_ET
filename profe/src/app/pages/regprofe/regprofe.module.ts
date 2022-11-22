import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegprofePageRoutingModule } from './regprofe-routing.module';
import { RegprofePage } from './regprofe.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RegprofePageRoutingModule
  ],
  declarations: [RegprofePage]
})
export class RegprofePageModule {}
