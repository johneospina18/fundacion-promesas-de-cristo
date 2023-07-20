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
import { MakeVolunteerPageComponent } from './pages/make-volunteer-page/make-volunteer-page.component';
import { WhoWeArePageComponent } from './pages/who-we-are-page/who-we-are-page.component';
import { StoryComponent } from './components/story/story.component';

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
    MakeVolunteerPageComponent,
    WhoWeArePageComponent,
    StoryComponent,
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
