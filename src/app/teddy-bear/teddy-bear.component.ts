import {Component, Input} from '@angular/core';

import {Location} from '../shared/interfaces/location';

@Component({
  selector: 'wea-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent {
  constructor() {
  }

  @Input()
  public location: Location;
}
