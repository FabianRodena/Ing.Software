import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'revisar-datos',
    loadChildren: () => import('./revisar-datos/revisar-datos.module').then( m => m.RevisarDatosPageModule)
  },
  {
    path: 'historial-pagos',
    loadChildren: () => import('./historial-pagos/historial-pagos.module').then( m => m.HistorialPagosPageModule)
  },
  {
    path: 'pagar-mensualidad',
    loadChildren: () => import('./pagar-mensualidad/pagar-mensualidad.module').then( m => m.PagarMensualidadPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
