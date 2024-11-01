import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentPageComponent } from './pages/document-page/document-page.component';
import { ContractsPageComponent } from './pages/contracts-page/contracts-page.component';
import { FormatsRoutingModule } from './formats-routing.module';



@NgModule({
  declarations: [
    DocumentPageComponent,
    ContractsPageComponent
  ],
  imports: [
    CommonModule,
    FormatsRoutingModule
  ]
})
export class FormatsModule { }
