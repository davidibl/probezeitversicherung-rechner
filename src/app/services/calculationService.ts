import { Injectable } from '@angular/core';

@Injectable()
export class CalculationService {

  public calculateBeitrag(gehalt: number, eigeneKinder: boolean) {
    if (!gehalt) {
      return 0;
    }
    const factor = this.getKinderFactor(eigeneKinder);
    const preisBasis = (this.calculateLeistungMonatlich(gehalt, factor) / 100) * 50;
    const preis = preisBasis;
    return parseFloat(preis.toFixed(2));
  }

  public getKinderFactor(eigeneKinder: boolean) {
    return (eigeneKinder) ? 0.67 : 0.6;
  }

  public calculateLeistungMonatlich(gehalt: number, factor: number): number {
    return (gehalt * (1 - factor));
  }
}
