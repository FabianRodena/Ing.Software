import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  revisarDatos() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('revisar-datos');
  }

  historialPagos() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('historial-pagos');
  }

  pagarMensualidad() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('pagar-mensualidad');
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
