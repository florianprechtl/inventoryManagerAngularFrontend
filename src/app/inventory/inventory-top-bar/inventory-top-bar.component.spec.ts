import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InventoryTopBarComponent} from './inventory-top-bar.component';

describe('InventoryTopBarComponent', () => {
    let component: InventoryTopBarComponent;
    let fixture: ComponentFixture<InventoryTopBarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InventoryTopBarComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InventoryTopBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
