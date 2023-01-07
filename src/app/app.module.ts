import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { BoxMessagesComponent } from './box-messages/box-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    MenuComponent,
    ContactoPageComponent,
    EncabezadoComponent,
    BoxMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
