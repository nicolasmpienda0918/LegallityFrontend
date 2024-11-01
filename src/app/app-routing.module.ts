import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { FormatsModule } from './formats/formats.module';

const routes: Routes = [

  {
    path:'home',
    component: HomePageComponent
  },

  {
    path:'contact',
    component: ContactPageComponent
  },


  {
    path: 'about',
    component: AboutPageComponent
  },


  {
    path: 'formats',
    loadChildren:() => import('./formats/formats.module').then(  m =>FormatsModule)
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
