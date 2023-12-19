import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.page.html',
  styleUrls: ['./historial-pagos.page.scss'],
})
export class HistorialPagosPage {

  constructor(private navCtrl: NavController) {}

  soporte() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('soporte');

  }
  login() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('login');
  }

}