import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoLabelComponent } from './components/info-label/info-label.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoLabelComponent,
    HeaderComponent,
    LandingSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
