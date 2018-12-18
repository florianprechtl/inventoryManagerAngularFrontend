import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MyModalComponent} from './common/my-modal/my-modal.component';
import {RouterModule, Routes} from '@angular/router';
import {InventoryComponent} from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './login/auth.service';
import {AdminComponent} from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavigationDesktopComponent } from './navigation/navigation-desktop/navigation-desktop.component';
import { NavigationMobileComponent } from './navigation/navigation-mobile/navigation-mobile.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'home', component: HomeComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MyModalComponent,
        InventoryComponent,
        AdminComponent,
        HeaderComponent,
        HomeComponent,
        NavigationDesktopComponent,
        NavigationMobileComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
