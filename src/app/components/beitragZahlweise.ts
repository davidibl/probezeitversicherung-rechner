import { Component, Input } from '@angular/core';
import { Beitrag } from '../models/beitrag';

@Component({
  selector: 'app-beitrag-zahlweise',
  templateUrl: 'beitragZahlweise.html',
  styleUrls: ['beitragZahlweise.scss'],
})
export class BeitragZahlweiseComponent {

  @Input()
  public beitrag = new Beitrag(0, 0);

}
