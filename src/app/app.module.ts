import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MyModalComponent} from './common/my-modal/my-modal.component';
import {RouterModule, Routes} from '@angular/router';
import {InventoryComponent} from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {AdminComponent} from './admin/admin.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {NavigationDesktopComponent} from './navigation/navigation-desktop/navigation-desktop.component';
import {NavigationMobileComponent} from './navigation/navigation-mobile/navigation-mobile.component';
import {InventoryShowCaseComponent} from './inventory/inventory-show-case/inventory-show-case.component';
import {InventoryTopBarComponent} from './inventory/inventory-top-bar/inventory-top-bar.component';
import {InventoryEntryPanelComponent} from './inventory/inventory-show-case/inventory-entry-panel/inventory-entry-panel.component';
import {DataService} from './services/data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
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
        NavigationMobileComponent,
        InventoryShowCaseComponent,
        InventoryTopBarComponent,
        InventoryEntryPanelComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        DragDropModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        ),
        BrowserAnimationsModule
    ],
    providers: [AuthService, DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
