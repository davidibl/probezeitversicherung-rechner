import { Injectable } from '@angular/core';
import { berufe } from '../berufe';
import { Beruf } from '../models/beruf';

@Injectable()
export class BerufeService {

  public berufe: Beruf[] = berufe;

  public static distinct = (value, index, self) => self.indexOf(value) === index;

  public findBeruf(beruf: string) {
    if (!beruf || beruf.length < 3) {
      return [];
    }

    return this.berufe
      .filter(b => b.name.toLowerCase().indexOf(beruf.toLowerCase()) > -1)
      .filter(BerufeService.distinct);
  }
}
