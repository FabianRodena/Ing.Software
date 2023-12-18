import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarMensualidadPageRoutingModule } from './pagar-mensualidad-routing.module';

import { PagarMensualidadPage } from './pagar-mensualidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarMensualidadPageRoutingModule
  ],
  declarations: [PagarMensualidadPage]
})
export class PagarMensualidadPageModule {}
