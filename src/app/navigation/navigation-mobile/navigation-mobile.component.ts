import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
    selector: 'app-navigation-mobile',
    templateUrl: './navigation-mobile.component.html',
    styleUrls: ['./navigation-mobile.component.css']
})
export class NavigationMobileComponent implements OnInit {
    public homeActive = false;
    public loginActive = false;
    public inventoryActive = false;
    public adminActive = false;
    public logoutHidden = true;

    constructor(private router: Router, private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.authChange.subscribe((res) => {
            this.logoutHidden = !res;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.deactivateAllNavs();
                switch (event.url) {
                    case '/home':
                        this.homeActive = true;
                        break;
                    case '/login':
                        this.loginActive = true;
                        break;
                    case '/inventory':
                        this.inventoryActive = true;
                        break;
                    case '/admin':
                        this.adminActive = true;
                        break;
                }
            }
        });
    }

    deactivateAllNavs() {
        this.homeActive = false;
        this.loginActive = false;
        this.inventoryActive = false;
        this.adminActive = false;
    }

    public logout() {
        this.auth.logout();
    }
}
