import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

    @Output() authChange: EventEmitter<any> = new EventEmitter();

    private _authenticated = false;
    private _user;


    get authenticated() {
        return this._authenticated;
    }

    set authenticated(value: boolean) {
        this._authenticated = value;
        this.emitAuthentification(value);
    }

    get user() {
        return this._user;
    }

    set user(value) {
        this._user = value;
    }

    constructor(private http: HttpClient, private router: Router) {
    }

    public login(username, password) {
        this.http.get('http://localhost:8080/projects/RESTAPI/login/' + username + '/' + password).subscribe((res) => {
            if (res) {
                this.authenticated = true;
                this.user = res;
                this.redirect('inventory');
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

    public emitAuthentification(value: boolean) {
        this.authChange.emit(value);
    }

    redirect(path: string) {
        this.router.navigate(['/' + path]);
    }


}
