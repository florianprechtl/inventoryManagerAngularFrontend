import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-inventory-entry-panel',
    templateUrl: './inventory-entry-panel.component.html',
    styleUrls: ['./inventory-entry-panel.component.css']
})
export class InventoryEntryPanelComponent implements OnInit {

    private _entry;

    @Output() onDeleteEntry: EventEmitter<any> = new EventEmitter();

    @Input()
    set entry(value) {
        if (value !== undefined) {
            this._entry = value;
        }
    }
    get entry() {
        return this._entry;
    }

    constructor() {
    }

    ngOnInit() {
    }

    deleteEntry(event, inventoryNr) {
        event.stopPropagation();
        this.onDeleteEntry.emit(inventoryNr);
    }

}
