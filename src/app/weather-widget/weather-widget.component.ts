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

  public currentLocation: Location;

  constructor(private _service: LocationsService) {
    this.locations = this._service.getLocations();
    if (this.locations.length) {
      this.currentLocation = this.locations[0];
    }
  }

  public selectLocation(location: Location) {
    this.currentLocation = location;
  }
}
