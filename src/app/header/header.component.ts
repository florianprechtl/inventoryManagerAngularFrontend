import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public title;
    public menuCollapsed = false;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                switch (event.url) {
                    case '/home':
                        this.title = 'MyFridge - Home';
                        break;
                    case '/inventory':
                        this.title = 'MyFridge - Inventory';
                        break;
                    case '/login':
                        this.title = 'MyFridge - Login';
                        break;
                    case '/admin':
                        this.title = 'MyFridge - Admin';
                        break;
                    default:
                        this.title = 'MyFrigde - Home';
                        break;
                }
            }
        });
    }

    public toggleButtonDisplay() {
        this.menuCollapsed = !this.menuCollapsed;
    }


}
