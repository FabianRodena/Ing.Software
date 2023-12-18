import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagarMensualidadPage } from './pagar-mensualidad.page';

describe('PagarMensualidadPage', () => {
  let component: PagarMensualidadPage;
  let fixture: ComponentFixture<PagarMensualidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagarMensualidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
