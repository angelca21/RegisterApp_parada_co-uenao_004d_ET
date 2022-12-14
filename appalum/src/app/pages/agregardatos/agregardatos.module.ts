import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregardatosPageRoutingModule } from './agregardatos-routing.module';

import { AgregardatosPage } from './agregardatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregardatosPageRoutingModule
  ],
  declarations: [AgregardatosPage]
})
export class AgregardatosPageModule {}
