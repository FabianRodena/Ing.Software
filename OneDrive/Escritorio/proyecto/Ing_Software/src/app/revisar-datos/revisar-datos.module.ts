import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisarDatosPageRoutingModule } from './revisar-datos-routing.module';

import { RevisarDatosPage } from './revisar-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisarDatosPageRoutingModule
  ],
  declarations: [RevisarDatosPage]
})
export class RevisarDatosPageModule {}
