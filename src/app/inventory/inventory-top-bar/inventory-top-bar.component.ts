import {Component, ViewChild, Input, OnInit, ElementRef, EventEmitter, Output} from '@angular/core';
import {Inventory} from '../../classes/inventory.class';

@Component({
    selector: 'app-inventory-top-bar',
    templateUrl: './inventory-top-bar.component.html',
    styleUrls: ['./inventory-top-bar.component.css']
})
export class InventoryTopBarComponent implements OnInit {

    @ViewChild('inventorySelect') inventorySelect: ElementRef;

    @Input()
    public inventories: Inventory[];

    @Output() onInventorySelect: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {

    }

    onChange(event) {
        this.onInventorySelect.emit(event.target.value);
    }
}


