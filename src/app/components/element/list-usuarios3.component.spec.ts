import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsuarios3Component } from './element.component';

describe('ListUsuarios3Component', () => {
  let component: ListUsuarios3Component;
  let fixture: ComponentFixture<ListUsuarios3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListUsuarios3Component]
    });
    fixture = TestBed.createComponent(ListUsuarios3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
