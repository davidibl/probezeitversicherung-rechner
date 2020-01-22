import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, combineLatest } from 'rxjs';
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
    A: 0.1,
    B: 0.2,
    C: 0.3,
    D: 0.4,
  }

  public gehaltSubject = new BehaviorSubject<number>(0);
  public berufSubject = new ReplaySubject<string>(1);

  public beitragSubject = combineLatest(this.gehaltSubject, this.berufSubject)
                            .pipe(
                              map(([gehalt, berufName]) => {
                                if (!gehalt || !berufName) {
                                  return 0;
                                }
                                const klasse = this.berufe.find(b => b.name === berufName).klasse;
                                return gehalt * this.klassenTabelle[klasse];
                              })
                            );


  public test = this.beitragSubject.pipe(tap(value => console.log(value))).subscribe();

  public setBeruf(beruf: string) {
    this.berufSubject.next(beruf);
  }

  public setGehalt(gehalt: string) {
    this.gehaltSubject.next(parseFloat(gehalt));
  }

  public ngOnInit() {
  }

}
