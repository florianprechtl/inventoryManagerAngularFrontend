import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../services/data.service';
import {Inventoryentry} from '../../classes/inventoryentry.class';
import {Inventory} from '../../classes/inventory.class';

@Component({
    selector: 'app-inventory-show-case',
    templateUrl: './inventory-show-case.component.html',
    styleUrls: ['./inventory-show-case.component.css']
})
export class InventoryShowCaseComponent implements OnInit {

    public inventoryEntries: Inventoryentry[];

    private _currentInventoryNr: number;
    private _searchEntry: string;

    @Input()
    set currentInventoryNr(value: number) {
        if (value) {
            this._currentInventoryNr = value;
            this.loadInventory(value);
        }
    }

    get currentInventoryNr(): number {
        return this._currentInventoryNr;
    }

    @Input()
    set searchEntry(value: string) {
        if (value) {
            this._searchEntry = value;
            this.searchInventoryEntry(this.currentInventoryNr, value);
        } else {
            this._searchEntry = value;
            this.loadInventory(this.currentInventoryNr);
        }
    }

    get searchEntry(): string {
        return this._searchEntry;
    }


    constructor(private data: DataService) {
    }

    ngOnInit() {
    }

    loadInventory(inventoryNr: number) {
        this.data.getInventoryEntries(inventoryNr).subscribe((res: Inventoryentry[]) => {
            this.inventoryEntries = res;
            console.log(res);
        });
    }

    searchInventoryEntry(inventoryNr: number, searchEntry: string) {
        this.data.searchInventoryEntries(inventoryNr, searchEntry).subscribe((res: Inventoryentry[]) => {
            this.inventoryEntries = res;
        });
    }

}
