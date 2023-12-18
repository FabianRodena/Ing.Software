import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevisarDatosPage } from './revisar-datos.page';

describe('RevisarDatosPage', () => {
  let component: RevisarDatosPage;
  let fixture: ComponentFixture<RevisarDatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RevisarDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
