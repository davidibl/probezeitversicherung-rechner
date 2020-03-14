import { Component, OnInit, Input } from '@angular/core';
import { Beitrag } from '../models/beitrag';
import { Leistung } from '../models/leistung';

@Component({
  selector: 'app-werte-only',
  templateUrl: 'werteOnly.html',
  styleUrls: ['werteOnly.scss'],
})
export class WerteOnlyComponent implements OnInit {

  public beitrag: Beitrag;
  @Input()
  public leistung: Leistung;

  public ngOnInit() {

    const leistungJson = window.localStorage.getItem('leistung');
    if (leistungJson) {
      this.leistung = JSON.parse(leistungJson);
      if (!this.leistung) {
        this.leistung = new Leistung(0, 0, 0, 0);
      }
    } else {
      this.leistung = new Leistung(0, 0, 0, 0);
    }

    window.addEventListener('storage', (event) => {
      const leistungJson = window.localStorage.getItem('leistung');
      if (leistungJson) {
        this.leistung = JSON.parse(leistungJson);
        if (!this.leistung) {
          this.leistung = new Leistung(0, 0, 0, 0);
        }
      } else {
        this.leistung = new Leistung(0, 0, 0, 0);
      }
    });
    if (window.localStorage) {
      const beitragJson = window.localStorage.getItem('beitrag');
      if (beitragJson) {
        this.beitrag = JSON.parse(beitragJson);
      }
    }
  }
}
