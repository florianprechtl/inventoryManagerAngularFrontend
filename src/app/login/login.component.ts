import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService) {
    }

    public loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });

    ngOnInit() {
    }

    loginUser(event) {
        event.preventDefault();
        const username = event.target.querySelector('#username').value;
        const password = event.target.querySelector('#password').value;

        this.auth.login(username, password);

    }


}
