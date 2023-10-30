import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { HousingListComponent } from './housing-list/housing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    HousingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
