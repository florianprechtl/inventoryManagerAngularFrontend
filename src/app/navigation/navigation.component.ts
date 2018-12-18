import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

    public homeActive = false;
    public loginActive = false;
    public inventoryActive = false;
    public adminActive = false;

  constructor(private router: Router) { }

  ngOnInit() {
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


}
