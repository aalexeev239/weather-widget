import {Injectable} from '@angular/core';
import {Location} from '../interfaces/location';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class LocationsService {

  public currentLocation: ReplaySubject<Location> = new ReplaySubject();

  private _locations: Location[] = [
    {
      name: 'Курортный отель Puri Gangga',
      description: 'Jl. Cendrawasih no. 99',
      images: [
        {url: 'https://cdn.ostrovok.ru/t/120x120/extranet/de/5b/de5b901d032d3da926e3bbdfc2d281230132df78.jpeg'},
        {url: 'https://cdn.ostrovok.ru/t/120x120/extranet/ab/e4/abe4b3e40db0b88424bae0ac8cdd2b340dab31f1.jpeg'},
        {url: 'https://cdn.ostrovok.ru/t/120x120/extranet/f2/46/f246c226d99fdfc95cba3507ad6a828a50722da8.jpeg'}
      ],
      phone: '3123432434',
      weather: 14,
      water: 20,
      followers: 1324,
      following: 200,
      stars: 5
    },
    {
      name: 'Hotel Tjampuhan Spa',
      description: 'Jl. Cendrawasih no. 99',
      images: [
        {url: 'https://cdn.ostrovok.ru/t/120x120/mec/ed/e7/ede78b3f77f5ef8a97b7e7b9b959fe4e93d0ffee.jpeg'},
        {url: 'https://cdn.ostrovok.ru/t/120x120/mec/7b/86/7b863aa987c0e77c784b8fd20ad4c97da6e261b9.jpeg'},
        {url: 'https://cdn.ostrovok.ru/t/120x120/mec/07/43/0743f5def3f319c0c11373cf427fde06db7fc114.jpeg'}
      ],
      phone: '3121132434',
      weather: 19,
      water: 2,
      followers: 324,
      following: 10,
      stars: 5
    },
    {
      name: 'Курортный отель Puri Gangga',
      description: 'Jl. Cendrawasih no. 99',
      images: [
        {url: 'https://cdn.ostrovok.ru/t/120x120/extranet/de/5b/de5b901d032d3da926e3bbdfc2d281230132df78.jpeg'},
        {url: 'https://cdn.ostrovok.ru/t/120x120/extranet/ab/e4/abe4b3e40db0b88424bae0ac8cdd2b340dab31f1.jpeg'},
        {url: 'https://cdn.ostrovok.ru/t/120x120/extranet/f2/46/f246c226d99fdfc95cba3507ad6a828a50722da8.jpeg'}
      ],
      phone: '3123432434',
      weather: 42,
      water: -2,
      followers: 2324,
      following: 223,
      stars: 4
    },
    {
      name: 'Svarga Loka Resort',
      description: 'Jl. Cendrawasih no. 99',
      images: [
        {url: 'https://cdn.ostrovok.ru/t/120x120/mec/hotels/9000000/8370000/8369300/8369268/8369268_14_b.jpg'}
      ],
      phone: '3123432434',
      weather: 32,
      water: 19,
      followers: 124,
      following: 2,
      stars: 4
    },
    {
      name: 'Sanur Paradise Plaza Hotel',
      description: 'Jl. Cendrawasih no. 99',
      images: [
        {url: 'https://cdn.ostrovok.ru/t/120x120/mec/hotels/2000000/1150000/1143100/1143010/1143010_46_b.jpg'},
        {url: 'https://cdn.ostrovok.ru/t/120x120/mec/hotels/2000000/1150000/1143100/1143010/1143010_59_b.jpg'}
      ],
      phone: '3123432434',
      weather: -23,
      water: -12,
      followers: 324,
      following: 22300,
      stars: 5
    }
  ];

  public locations: Observable<Location> = Observable.from(this._locations);

  public setCurrentLocation(location: Location) {
    this.currentLocation.next(location);
  };
}
