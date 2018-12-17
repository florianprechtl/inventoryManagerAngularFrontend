import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const username = event.target.querySelector('#username').value;
    const password = event.target.querySelector('#password').value;

    this.auth.login(username, password);
  }


}
