import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import { HelloWorld2Component } from './hello-world2/hello-world2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HelloWorld2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
