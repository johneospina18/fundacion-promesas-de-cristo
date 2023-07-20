import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MakeVolunteerPageComponent } from './pages/make-volunteer-page/make-volunteer-page.component';
import { WhoWeArePageComponent } from './pages/who-we-are-page/who-we-are-page.component';

const routes: Routes = [
  {
    path:  "",
    pathMatch:  "full",
    redirectTo:  "home",
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path:"contact",
    component: ContactPageComponent,
  },
  {
    path:"volunteer",
    component:MakeVolunteerPageComponent,
  },

  {
    path:"who-we-are",
    component:WhoWeArePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
