import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryEntryPanelComponent } from './inventory-entry-panel.component';

describe('InventoryEntryPanelComponent', () => {
  let component: InventoryEntryPanelComponent;
  let fixture: ComponentFixture<InventoryEntryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryEntryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryEntryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
