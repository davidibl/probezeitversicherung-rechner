import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, combineLatest, merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

  public berufe: Beruf[] = [
    {name: 'xx', klasse: 'A'},
    {name: 'zz', klasse: 'B'},
    {name: 'rr', klasse: 'C'},
    {name: 'tt', klasse: 'A'},
    {name: 'yy', klasse: 'C'},
  ];

  public klassenTabelle = {
    A: 0.01,
    B: 0.02,
    C: 0.03,
    D: 0.04,
  }

  public gehalt$ = new ReplaySubject<number>(1);
  public beruf$ = new ReplaySubject<string>(1);

  public beitragInitial$ = new BehaviorSubject(0);
  public beitrag$ = combineLatest(this.gehalt$, this.beruf$)
                            .pipe(
                              map(([gehalt, berufName]) => {
                                if (!gehalt || !berufName) {
                                  return 0;
                                }
                                const beruf = this.berufe.find(b => b.name === berufName);
                                if (!beruf) {
                                  return 0;
                                }
                                const klasse = beruf.klasse;
                                const preisBasis = ((gehalt * 0.4) * 6) * this.klassenTabelle[klasse];
                                const preis = preisBasis;
                                return preis.toFixed(2);
                              })
                            );

  public beitragFinal$ = merge(this.beitragInitial$, this.beitrag$);


  public test = this.beitrag$.pipe(tap(value => console.log(value))).subscribe();

  public setBeruf(beruf: string) {
    this.beruf$.next(beruf);
  }

  public setGehalt(gehalt: string) {
    const newGehalt = !gehalt ? null : parseFloat(gehalt);
    this.gehalt$.next(newGehalt);
  }

  public ngOnInit() {
  }

}
