import {Component} from '@angular/core';
import {LocationsService} from '../shared/services/locations.service';

import {Location} from '../shared/interfaces/location';

import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'wea-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [LocationsService]
})
export class WeatherWidgetComponent {
  public locations: Location[] = [];


  public currentLocation: Location;
  public currentLocationAf: FirebaseObjectObservable<Location>;

  public ratingList = [
    {
      title: '5 Stars',
      value: 5
    },
    {
      title: '4 Stars',
      value: 4
    },
    {
      title: 'All',
      value: 0
    }
  ];

  public currentRating: number = 0;

  private _locationService: LocationsService;
  private _af: AngularFire;

  constructor(_locationService: LocationsService, af: AngularFire) {
    // with local service
    // this._locationService = _locationService;
    //
    // this._locationService.locations.subscribe((location)=> {
    //   if (!this.locations.length) {
    //     this._locationService.setCurrentLocation(location);
    //   }
    //
    //   this.locations.push(location);
    // });
    //
    // this._locationService.currentLocation.subscribe((location)=> {
    //   this.currentLocation = location;
    // });

    this._af = af;

    this.currentLocationAf = this._af.database.object('/current');

    this._af.database.list('locations').subscribe((locations)=> {
      this.locations = locations;
    });
  }

  public selectLocation(location: Location): void {
    // with local service
    // this._locationService.setCurrentLocation(location);

    let loc = Object.assign({}, location);
    for (let key of Object.keys(loc)) {
      if (key.indexOf('$') === 0) {
        delete loc[key];
      }
    }
    this._af.database.object('/current').set(loc);
  }

  public setRating(value: number): void {
    if ((this.currentRating === value)) {
      return;
    }

    this.currentRating = value;
    this._locationService.setCurrentLocation(null);
  }
}
