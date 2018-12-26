import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {

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
