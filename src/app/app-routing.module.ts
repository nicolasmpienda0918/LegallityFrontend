import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContractsPageComponent } from './shared/pages/contracts-page/contracts-page.component';
import { DocumentPageComponent } from './shared/pages/document-page/document-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [

  {
    path:'home',
    component: HomePageComponent
  },

  {
    path: 'contracts',
    component: ContractsPageComponent
  },

  {
    path: 'document',
    component: DocumentPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },



  {
    path: 'about',
    component: AboutPageComponent
  },


  {
    path:'**',
    redirectTo: 'home',

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
