import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BoxMessagesComponent } from './components/box-messages/box-messages.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuienesSomosPageComponent } from './pages/quienes-somos-page/quienes-somos-page.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    MenuComponent,
    BoxMessagesComponent,
    HeaderComponent,
    ContactPageComponent,
    ContactFormComponent,
    QuienesSomosPageComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
