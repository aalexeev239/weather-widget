import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';
import {LocationComponent} from './location/location.component';
import {TemperaturComponent} from './temperatur/temperatur.component';
import {TeddyBearComponent} from './teddy-bear/teddy-bear.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    LocationComponent,
    TemperaturComponent,
    TeddyBearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
