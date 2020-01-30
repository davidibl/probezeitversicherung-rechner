import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, combineLatest, merge } from 'rxjs';
import { map, tap, filter, debounceTime } from 'rxjs/operators';
import { berufe } from '../berufe';
import { Beitrag } from '../models/beitrag';
import { Leistung } from '../models/leistung';
import { CalculationService } from '../services/calculationService';

export interface Beruf {
  name: string;
  klasse: string;
}

@Component({
  selector: 'app-rechner',
  templateUrl: 'rechner.html',
  styleUrls: ['rechner.scss'],
})
export class RechnerComponent implements OnInit {

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
    map(beruf => this.berufe.filter(b => b.name.toLowerCase().indexOf(beruf.toLowerCase()) > -1)),
    map(berufeFiltered => berufeFiltered.slice(0, 15))
  );

  public berufeFiltered$ = merge(this.berufNotPresent$, this.berufPresent$);

  public beitragInitial$ = new BehaviorSubject(0);
  public gehaltLazy$ = this.gehalt$.pipe(debounceTime(300));
  public beitrag$ = combineLatest(this.gehaltLazy$, this.eigeneKinder$)
                            .pipe(
                              map(([gehalt, eigeneKinder]) =>
                                this.calculationService.calculateBeitrag(gehalt, eigeneKinder))
                            );

  public beitragFinal$ = merge(this.beitragInitial$, this.beitrag$)
    .pipe(filter(beitrag => beitrag !== null && beitrag !== undefined));

  public beitragMonatlich$ = this.beitragFinal$.pipe(
    filter(beitrag => beitrag !== null && beitrag !== undefined),
    map(beitrag => {
      if (beitrag === 0) {
        return 0;
      }
      return parseFloat((beitrag / 6).toFixed(2));
    })
  );

  public algBasis$ = combineLatest(this.gehaltLazy$, this.eigeneKinder$)
    .pipe(
      map(([gehalt, eigeneKinder]) => {
        if (!gehalt) {
          return 0;
        }
        const factor = this.calculationService.getKinderFactor(eigeneKinder);
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
        const factor = this.calculationService.getKinderFactor(eigeneKinder);
        return parseFloat(this.calculationService.calculateLeistungMonatlich(gehalt, factor).toFixed(2));
      })
    );
  public leistungMonatlichInitial$ = new BehaviorSubject(0);
  public leistungMonatlich$ = merge(this.leistungMonatlichInitial$, this.leistungMonatlichBasis$);
  public leistungGesamt$ = this.leistungMonatlich$
    .pipe(
      map(leistung => !!leistung ? parseFloat((leistung * 6).toFixed(2)) : 0)
    );

  @Output()
  public beitrag = new EventEmitter<Beitrag>();

  @Output()
  public leistung = new EventEmitter<Leistung>();

  public constructor(private calculationService: CalculationService) {}

  @Input()
  public setBeruf(beruf: string) {
    this.beruf$.next(beruf);
  }

  @Input()
  public setEigeneKinder(eigeneKinder: boolean) {
    this.eigeneKinder$.next(eigeneKinder);
  }

  @Input()
  public setGehalt(gehalt: string) {
    const newGehalt = !gehalt ? null : parseFloat(gehalt);
    this.gehalt$.next(newGehalt);
  }

  public ngOnInit() {
    combineLatest(this.beitragFinal$, this.beitragMonatlich$)
      .subscribe(([beitrag, beitragMonatlich]) => this.beitrag.emit(new Beitrag(beitrag, beitragMonatlich)));

    combineLatest(this.leistungMonatlich$, this.leistungGesamt$, this.alg$, this.gehalt$)
      .subscribe(([leistung, leistungGesamt, alg, gehalt]) => {
        const differenz = parseFloat((gehalt - alg).toFixed(2));
        this.leistung.emit(new Leistung(leistung, leistungGesamt, alg, differenz));
      });
  }
}
