import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-inventory-show-case',
    templateUrl: './inventory-show-case.component.html',
    styleUrls: ['./inventory-show-case.component.css']
})
export class InventoryShowCaseComponent implements OnInit {

    public inventoryentries;

    private _currentInventory;

    @Input()
    set currentInventory(value: number) {
        if (value) {
            this._currentInventory = value;
            this.loadInventory(value);
        }
    }
    get currentInventory(): number {
        return this._currentInventory;
    }


    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    loadInventory(inventoryNr: number) {
        this.http.get('http://localhost:8080/projects/RESTAPI/currentinventoryentry/' + inventoryNr).subscribe((res) => {
            console.log(res);
            this.inventoryentries = res;
        });
    }

}
