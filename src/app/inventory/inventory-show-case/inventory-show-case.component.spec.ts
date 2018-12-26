import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InventoryShowCaseComponent} from './inventory-show-case.component';

describe('InventoryShowCaseComponent', () => {
    let component: InventoryShowCaseComponent;
    let fixture: ComponentFixture<InventoryShowCaseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InventoryShowCaseComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InventoryShowCaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
