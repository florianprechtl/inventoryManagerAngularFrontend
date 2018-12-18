import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from '../../login/auth.service';

@Component({
    selector: 'app-navigation-desktop',
    templateUrl: './navigation-desktop.component.html',
    styleUrls: ['./navigation-desktop.component.css']
})
export class NavigationDesktopComponent implements OnInit {

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
