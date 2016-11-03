import {Pipe, PipeTransform} from '@angular/core';
import {Location} from '../interfaces/location';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: Location[], args?: number): Location[] {
    let result = value;
    if (args) {
      result = value.filter((item)=> {
        return item.stars === args;
      });
    }
    return result;
  }

}
