import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoUsuariosComponent } from './listado-usuarios.component';

describe('ListadoUsuariosComponent', () => {
  let component: ListadoUsuariosComponent;
  let fixture: ComponentFixture<ListadoUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListadoUsuariosComponent]
    });
    fixture = TestBed.createComponent(ListadoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
