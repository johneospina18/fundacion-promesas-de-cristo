import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { QuienesSomosPageComponent } from './pages/quienes-somos-page/quienes-somos-page.component';

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
    path:"quienes-somos",
    component: QuienesSomosPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
