import {Component, Input, OnChanges} from '@angular/core';
import {Location} from '../shared/interfaces/location';

@Component({
  selector: 'wea-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent implements OnChanges {

  public bgColorDelta: number;

  constructor() {
  }

  @Input()
  public location: Location;

  ngOnChanges() {
    this.bgColorDelta = 150 - 4 * this.location.weather;
  }

}
