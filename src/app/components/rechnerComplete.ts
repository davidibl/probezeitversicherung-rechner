import { Component } from '@angular/core';
import { Leistung } from '../models/leistung';

@Component({
  selector: 'app-rechner-complete',
  templateUrl: 'rechnerComplete.html',
  styleUrls: ['rechnerComplete.scss'],
})
export class RechnerCompleteComponent {

  public leistung: Leistung;

  public setLeistung($event) {
    this.leistung = $event;
  }
}
