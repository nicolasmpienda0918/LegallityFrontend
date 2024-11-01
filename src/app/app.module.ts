import { MenuItem } from './../../node_modules/primeng/api/menuitem.d';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';







@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    MenubarModule,
    ButtonModule,



  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
