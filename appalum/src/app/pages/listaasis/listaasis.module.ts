import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaasisPageRoutingModule } from './listaasis-routing.module';

import { ListaasisPage } from './listaasis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaasisPageRoutingModule
  ],
  declarations: [ListaasisPage]
})
export class ListaasisPageModule {}
