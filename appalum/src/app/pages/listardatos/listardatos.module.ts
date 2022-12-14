import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListardatosPageRoutingModule } from './listardatos-routing.module';

import { ListardatosPage } from './listardatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListardatosPageRoutingModule
  ],
  declarations: [ListardatosPage]
})
export class ListardatosPageModule {}
