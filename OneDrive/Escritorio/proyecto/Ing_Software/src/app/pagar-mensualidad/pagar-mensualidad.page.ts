import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagar-mensualidad',
  templateUrl: './pagar-mensualidad.page.html',
  styleUrls: ['./pagar-mensualidad.page.scss'],
})
export class PagarMensualidadPage{

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
