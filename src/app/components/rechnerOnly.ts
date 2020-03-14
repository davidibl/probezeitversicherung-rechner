import { Component, Output, EventEmitter } from '@angular/core';
import { Beitrag } from '../models/beitrag';
import { Leistung } from '../models/leistung';

@Component({
  selector: 'app-rechner-only',
  templateUrl: 'rechnerOnly.html',
  styleUrls: ['rechnerOnly.scss'],
})
export class RechnerOnlyComponent {

  public beitrag: Beitrag;

  @Output()
  public leistung = new EventEmitter<Leistung>();

  public onBeitragChanged(beitrag: Beitrag) {
    this.beitrag = beitrag;
    if (window.localStorage) {
      window.localStorage.setItem('beitrag', JSON.stringify(beitrag));
    }
  }

  public onLeistungChange(leistung: Leistung) {
    this.leistung.emit(leistung);
    if (window.localStorage) {
      window.localStorage.setItem('leistung', JSON.stringify(leistung));
    }
  }
}
