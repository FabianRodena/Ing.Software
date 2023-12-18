import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisarDatosPage } from './revisar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: RevisarDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisarDatosPageRoutingModule {}
