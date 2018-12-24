import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {


    constructor(private http: HttpClient) {
    }

    public getAllInventories() {
        return this.http.get('http://localhost:8080/projects/RESTAPI/inventory');
    }

    public getIventory(inventoryNr) {
        return this.http.get('http://localhost:8080/projects/RESTAPI/inventory/' + inventoryNr);
    }

    getInventoryEntries(inventoryNr) {
        return this.http.get('http://localhost:8080/projects/RESTAPI/currentinventoryentry/' + inventoryNr);
    }

    searchInventoryEntries(inventoryNr, searchEntry) {
        return this.http.get('http://localhost:8080/projects/RESTAPI/search/' + inventoryNr + '/' + searchEntry);
    }
}
