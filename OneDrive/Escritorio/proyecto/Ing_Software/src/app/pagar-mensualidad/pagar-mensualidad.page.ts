import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar-mensualidad',
  templateUrl: './pagar-mensualidad.page.html',
  styleUrls: ['./pagar-mensualidad.page.scss'],
})
export class PagarMensualidadPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(paymentForm: any) {
    // Aquí puedes realizar acciones cuando se envía el formulario
    console.log('Formulario enviado:', paymentForm.value);
    // Puedes agregar lógica adicional según tus necesidades
  }

}
