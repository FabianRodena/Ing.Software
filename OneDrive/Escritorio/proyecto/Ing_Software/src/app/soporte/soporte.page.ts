import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.page.html',
  styleUrls: ['./soporte.page.scss'],
})
export class SoportePage {

  constructor(private navCtrl: NavController) {}

  login() {
    // Lógica que quieras ejecutar antes de navegar, si es necesario
    this.navCtrl.navigateForward('login');
  }

}
