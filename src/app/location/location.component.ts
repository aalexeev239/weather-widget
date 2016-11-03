import {Component, OnInit, Input} from '@angular/core';
import {Location} from '../shared/interfaces/location';

@Component({
  selector: 'wea-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor() {
  }


  @Input()
  public location: Location;

  @Input()
  public isActive: boolean;

  ngOnInit() {

  }

}
