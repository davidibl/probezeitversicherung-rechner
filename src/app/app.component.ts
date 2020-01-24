import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, combineLatest, merge } from 'rxjs';
import { map, tap, filter, debounceTime } from 'rxjs/operators';
import { berufe } from './berufe';

export interface Beruf {
  name: string;
  klasse: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public berufe: Beruf[] = berufe;

  public eigeneKinder$ = new BehaviorSubject(false);

  public gehalt$ = new ReplaySubject<number>(1);
  public beruf$ = new ReplaySubject<string>(1);

  public berufNotPresent$ = this.beruf$.pipe(
    filter(beruf => !beruf || beruf.length <= 3),
    map(_ => [] as Beruf[])
  );

  public berufPresent$ = this.beruf$.pipe(
    debounceTime(300),
    filter(beruf => !!beruf && beruf.length > 3),
    map(beruf => this.berufe.filter(b => b.name.indexOf(beruf) > -1)),
    map(berufeFiltered => berufeFiltered.slice(0, 15))
  );

  public berufeFiltered$ = merge(this.berufNotPresent$, this.berufPresent$);

  public beitragInitial$ = new BehaviorSubject(0);
  public gehaltLazy$ = this.gehalt$.pipe(debounceTime(300));
  public beitrag$ = combineLatest(this.gehaltLazy$, this.eigeneKinder$)
                            .pipe(
                              map(([gehalt, eigeneKinder]) => {
                                if (!gehalt) {
                                  return 0;
                                }
                                const factor = this.getKinderFactor(eigeneKinder);
                                const preisBasis = (this.calculateLeistungMonatlich(gehalt, factor) / 100) * 50;
                                const preis = preisBasis;
                                return parseFloat(preis.toFixed(2));
                              })
                            );
  public beitragMonatlich$ = this.beitrag$.pipe(
    filter(beitrag => !!beitrag),
    map(beitrag => (beitrag / 6).toFixed(2))
  );

  public beitragFinal$ = merge(this.beitragInitial$, this.beitrag$);

  public algBasis$ = combineLatest(this.gehaltLazy$, this.eigeneKinder$)
    .pipe(
      map(([gehalt, eigeneKinder]) => {
        if (!gehalt) {
          return 0;
        }
        const factor = this.getKinderFactor(eigeneKinder);
        return parseFloat((gehalt * factor).toFixed(2));
      })
    );
  public algInitial$ = new BehaviorSubject(0);
  public alg$ = merge(this.algInitial$, this.algBasis$);

  public leistungMonatlichBasis$ = combineLatest(this.gehaltLazy$, this.eigeneKinder$)
    .pipe(
      map(([gehalt, eigeneKinder]) => {
        if (!gehalt) {
          return 0;
        }
        const factor = this.getKinderFactor(eigeneKinder);
        return parseFloat(this.calculateLeistungMonatlich(gehalt, factor).toFixed(2));
      })
    );
  public leistungMonatlichInitial$ = new BehaviorSubject(0);
  public leistungMonatlich$ = merge(this.leistungMonatlichInitial$, this.leistungMonatlichBasis$);
  public leistungGesamt$ = this.leistungMonatlich$
    .pipe(
      map(leistung => !!leistung ? (leistung * 6).toFixed(2) : 0)
    );

  public setBeruf(beruf: string) {
    this.beruf$.next(beruf);
  }

  public setEigeneKinder(eigeneKinder: boolean) {
    this.eigeneKinder$.next(eigeneKinder);
  }

  public setGehalt(gehalt: string) {
    const newGehalt = !gehalt ? null : parseFloat(gehalt);
    this.gehalt$.next(newGehalt);
  }

  public ngOnInit() {
  }

  private getKinderFactor(eigeneKinder: boolean) {
    return (eigeneKinder) ? 0.67 : 0.6;
  }

  private calculateLeistungMonatlich(gehalt: number, factor: number): number {
    return (gehalt * (1 - factor));
  }

}
