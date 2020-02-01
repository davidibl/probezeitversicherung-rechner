import { Component } from '@angular/core';
import { Beitrag } from '../models/beitrag';
import { Leistung } from '../models/leistung';

@Component({
  selector: 'app-abschlussstrecke',
  templateUrl: 'abschlussstrecke.html',
  styleUrls: ['abschlussstrecke.scss'],
})
export class AbschlussstreckeComponent {

  public beitrag: Beitrag;
  public beitragUnten: Beitrag;
  public leistungUnten: Leistung;

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public setBeitrag(beitrag: Beitrag) {
    this.beitrag = beitrag;
  }

  public setBeitragUnten(beitrag: Beitrag) {
    this.beitragUnten = beitrag;
  }
}
