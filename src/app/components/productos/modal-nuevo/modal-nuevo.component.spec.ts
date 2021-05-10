import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoComponent } from './modal-nuevo.component';

describe('ModalNuevoComponent', () => {
  let component: ModalNuevoComponent;
  let fixture: ComponentFixture<ModalNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
