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
  public locations: Location[];
  public filteredLocations: Location[];

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

  constructor(private _service: LocationsService) {
    this.locations = this._service.getLocations();

    if (this.locations.length) {
      this.currentLocation = this.locations[0];
    }
  }

  public selectLocation(location: Location): void {
    this.currentLocation = location;
  }

  public setRating(value: number): void {
    if ((this.currentRating === value)) {
      return;
    }

    this.currentRating = value;
    this.currentLocation = null;
  }
}
