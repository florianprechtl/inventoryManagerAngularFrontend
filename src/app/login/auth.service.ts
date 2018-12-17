import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    private authenticated = false;
    private user;

    constructor(private http: HttpClient) { }

    public login(username, password) {
        this.http.get('http://localhost:8080/projects/RESTAPI/login/' + username + '/' + password).subscribe((res) => {
            if (res) {
                this.authenticated = true;
                this.user = res;
            }
        });
    }

    public logout() {
        this.authenticated = false;
    }

    /*
        Return observable of all users
     */
    public getAllUsers() {
        return this.http.get('http://localhost:8080/projects/RESTAPI/user');
    }

    /*
        returns observable of one specific selected by his username
     */
    public getUserByUsername(username) {
        return this.http.get('http://localhost:8080/projects/RESTAPI/user/' + username);
    }


}
