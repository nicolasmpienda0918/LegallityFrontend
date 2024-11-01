import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


import { RouterModule } from '@angular/router';
import { ContractsPageComponent } from './pages/contracts-page/contracts-page.component';
import { DocumentPageComponent } from './pages/document-page/document-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    NavbarComponent,
    ContractsPageComponent,
    DocumentPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    RouterModule
  ],

  exports: [
    AboutPageComponent,
    HomePageComponent,
    NavbarComponent

  ]
})
export class SharedModule { }
