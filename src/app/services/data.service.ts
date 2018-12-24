import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

    private headers = new Headers({ 'Content-Type': 'application/json'});

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

    deleteInventoryEntry(inventoryEntryNr): Observable<void> {
        return this.http.delete('http://localhost:8080/projects/RESTAPI/inventoryentry/' + inventoryEntryNr);
    }
}
