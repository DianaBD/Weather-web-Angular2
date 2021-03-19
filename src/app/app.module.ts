import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material/material.module';

// componente custom
import { FormsModule } from '@angular/forms';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    DashboardComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyATakIiglQFlmyzHjnvP1smRaJD6bA1mVc'
    }),
    MaterialModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
