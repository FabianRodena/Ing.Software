import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarMensualidadPage } from './pagar-mensualidad.page';

const routes: Routes = [
  {
    path: '',
    component: PagarMensualidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarMensualidadPageRoutingModule {}
