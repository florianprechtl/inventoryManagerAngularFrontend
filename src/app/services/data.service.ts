import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Inventory} from '../classes/inventory.class';
import {Inventoryentry} from '../classes/inventoryentry.class';

@Injectable()
export class DataService {

    private headers = new Headers({ 'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {
    }

    public getAllInventories(): Observable<Object> {
        return this.http.get('http://localhost:8080/projects/RESTAPI/inventory');
    }

    public getIventory(inventoryNr): Observable<Object> {
        return this.http.get('http://localhost:8080/projects/RESTAPI/inventory/' + inventoryNr);
    }

    getInventoryEntries(inventoryNr): Observable<Object> {
        return this.http.get('http://localhost:8080/projects/RESTAPI/currentinventoryentry/' + inventoryNr);
    }

    searchInventoryEntries(inventoryNr, searchEntry): Observable<Object> {
        return this.http.get('http://localhost:8080/projects/RESTAPI/search/' + inventoryNr + '/' + searchEntry);
    }

    deleteInventoryEntry(inventoryEntryNr): Observable<Object> {
        return this.http.delete('http://localhost:8080/projects/RESTAPI/inventoryentry/' + inventoryEntryNr);
    }
}
