import {Component, ViewChild, Input, OnInit, ElementRef, EventEmitter, Output} from '@angular/core';
import {Inventory} from '../../classes/inventory.class';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-inventory-top-bar',
    templateUrl: './inventory-top-bar.component.html',
    styleUrls: ['./inventory-top-bar.component.css']
})
export class InventoryTopBarComponent implements OnInit {

    @ViewChild('inventorySelect') inventorySelect: ElementRef;

    @Input() inventories: Inventory[];

    @Output() onInventorySelect: EventEmitter<any> = new EventEmitter();
    @Output() onSearchEntry: EventEmitter<any> = new EventEmitter();

    topBarForm = new FormGroup({
        searchEntry: new FormControl(''),
        inventorySelect: new FormControl('')
    });


    constructor() {
    }

    ngOnInit() {

    }

    onChange(event) {
        this.onInventorySelect.emit(event.target.value);
    }

    searchEntry(event) {
        this.onSearchEntry.emit(event.value);
    }
}


