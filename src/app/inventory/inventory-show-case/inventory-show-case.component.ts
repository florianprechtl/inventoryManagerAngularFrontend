import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../services/data.service';
import {Inventoryentry} from '../../classes/inventoryentry.class';
import {Inventory} from '../../classes/inventory.class';
import {catchError} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-inventory-show-case',
    templateUrl: './inventory-show-case.component.html',
    styleUrls: ['./inventory-show-case.component.css']
})
export class InventoryShowCaseComponent implements OnInit {

    public inventoryEntries: Inventoryentry[];
    public itemsToRemove: Inventoryentry[];

    private _currentInventoryNr: number;
    private _searchEntry: string;

    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep',
        'Get to work2',
        'Pick up groceries2',
        'Go home2',
        'Fall asleep2'
    ];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog3',
        'Get to work3',
        'Pick up groceries3',
        'Go home3',
        'Fall asleep3'
    ];


    @Input()
    set currentInventoryNr(value: number) {
        if (value) {
            this._currentInventoryNr = value;
            this.loadInventory();
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
            if (this.currentInventoryNr) {
                this.loadInventory();
            }
        }
    }

    get searchEntry(): string {
        return this._searchEntry;
    }


    constructor(private data: DataService) {
    }

    ngOnInit() {
    }

    loadInventory() {
        this.data.getInventoryEntries(this.currentInventoryNr).subscribe((res: Inventoryentry[]) => {
            this.inventoryEntries = res;
            console.log(res);
            this.itemsToRemove = Array(this.inventoryEntries[0]);
        });
    }

    searchInventoryEntry(inventoryNr: number, searchEntry: string) {
        this.data.searchInventoryEntries(inventoryNr, searchEntry).subscribe((res: Inventoryentry[]) => {
            this.inventoryEntries = res;
        });
    }

    deleteEntry(inventoryEntryNr) {
        this.data.deleteInventoryEntry(inventoryEntryNr).subscribe(
            () => console.log('deletion successful'),
            () => alert('deletion error'),
            () => this.loadInventory()
        );
    }

    drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
            return;
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.container.data.length);
        }
    }

}
