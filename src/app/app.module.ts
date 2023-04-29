import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoLabelComponent } from './components/info-label/info-label.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { MostPopularProductsComponent } from './components/most-popular-products/most-popular-products.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoLabelComponent,
    HeaderComponent,
    LandingSectionComponent,
    MostPopularProductsComponent,
    FeaturedProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
