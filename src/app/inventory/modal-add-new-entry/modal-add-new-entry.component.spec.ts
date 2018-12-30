import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNewEntryComponent } from './modal-add-new-entry.component';

describe('ModalAddNewEntryComponent', () => {
  let component: ModalAddNewEntryComponent;
  let fixture: ComponentFixture<ModalAddNewEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddNewEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddNewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
