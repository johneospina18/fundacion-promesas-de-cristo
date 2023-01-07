import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';

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
    path:"contacto",
    component: ContactoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
