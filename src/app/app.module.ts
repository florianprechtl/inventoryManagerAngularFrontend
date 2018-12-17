import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyModalComponent } from './common/my-modal/my-modal.component';
import { RouterModule, Routes} from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './login/auth.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inventory', component: InventoryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyModalComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
