import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-revisar-datos',
  templateUrl: './revisar-datos.page.html',
  styleUrls: ['./revisar-datos.page.scss'],
})
export class RevisarDatosPage {

  constructor(private navCtrl: NavController) {}

  historialPagos() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('historial-pagos');
  }
  soporte() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('soporte');
  }
  login() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('login');
  }

}
