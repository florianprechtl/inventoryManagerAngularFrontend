import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyModalComponent } from './common/my-modal/my-modal.component';
import { RouterModule, Routes} from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';

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
    BrowserModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
