import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
    selector: 'app-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

    public currentInventory;
    public inventories;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getAllInventories().subscribe((res) => {
            this.inventories = res;
            if (this.inventories.length > 0) {
                this.currentInventory = this.inventories[0].InventoryNr;
            } else {
                this.currentInventory = null;
            }
        });
    }

}
