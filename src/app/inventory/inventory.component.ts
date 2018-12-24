import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Inventory} from '../classes/inventory.class';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

    public currentInventoryNr: number;
    public inventories: Inventory[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getAllInventories().subscribe((res: Inventory[]) => {
            this.inventories = res;
            if (this.inventories.length > 0) {
                this.currentInventoryNr = this.inventories[0].InventoryNr;
            } else {
                this.currentInventoryNr = null;
            }
        });
    }

    onInventorySelect(inventoryNr: number) {
        this.currentInventoryNr = inventoryNr;
    }

}
