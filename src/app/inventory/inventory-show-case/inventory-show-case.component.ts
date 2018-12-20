import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-inventory-show-case',
    templateUrl: './inventory-show-case.component.html',
    styleUrls: ['./inventory-show-case.component.css']
})
export class InventoryShowCaseComponent implements OnInit {

    public inventoryentries;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('http://localhost:8080/projects/RESTAPI/inventoryentry').subscribe((res) => {
            console.log(res);
            this.inventoryentries = res;
        });
    }

}
