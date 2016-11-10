import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component';
import {LocationComponent} from './location/location.component';
import {TemperaturComponent} from './temperatur/temperatur.component';
import {TeddyBearComponent} from './teddy-bear/teddy-bear.component';
import {RatingPipe} from './shared/pipes/rating.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyDsx1cn9ZpmA9fST7x2FUPXODnzWzK9qFM",
  authDomain: "weather-widget-181b3.firebaseapp.com",
  databaseURL: "https://weather-widget-181b3.firebaseio.com",
  storageBucket: "weather-widget-181b3.appspot.com",
  messagingSenderId: "37091986475"
};

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    LocationComponent,
    TemperaturComponent,
    TeddyBearComponent,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
