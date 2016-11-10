import {Component} from '@angular/core';
import {LocationsService} from '../shared/services/locations.service';

import {Location} from '../shared/interfaces/location';

@Component({
  selector: 'wea-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [LocationsService]
})
export class WeatherWidgetComponent {
  public locations: Location[] = [];


  public currentLocation: Location;

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

  constructor(_locationService: LocationsService) {
    this._locationService = _locationService;

    this._locationService.locations.subscribe((location)=> {
      if (!this.locations.length) {
        this._locationService.setCurrentLocation(location);
      }

      this.locations.push(location);
    });

    this._locationService.currentLocation.subscribe((location)=> {
      this.currentLocation = location;
    });
  }

  public selectLocation(location: Location): void {
    this._locationService.setCurrentLocation(location);
  }

  public setRating(value: number): void {
    if ((this.currentRating === value)) {
      return;
    }

    this.currentRating = value;
    this._locationService.setCurrentLocation(null);
  }
}
