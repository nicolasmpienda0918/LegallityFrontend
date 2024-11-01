import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';


import { DocumentPageComponent } from './pages/document-page/document-page.component';
import { ContractsPageComponent } from './pages/contracts-page/contracts-page.component';


const routes: Routes = [

  {
    path: 'document',
    component: DocumentPageComponent
  },
  {
    path: 'contracts',
    component: ContractsPageComponent
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule

  ],

})
export class FormatsRoutingModule{}
