import { Component, OnInit, ViewChild } from '@angular/core';
import { Beitrag } from '../models/beitrag';
import { Leistung } from '../models/leistung';
import { Router } from '@angular/router';
import { ScrollToService } from '../services/scrollToService';

@Component({
  selector: 'app-abschlussstrecke',
  templateUrl: 'abschlussstrecke.html',
  styleUrls: ['abschlussstrecke.scss'],
})
export class AbschlussstreckeComponent implements OnInit {

  @ViewChild('andere', { static: true })
  private andere;

  @ViewChild('abschluss', { static: true })
  private abschluss;

  @ViewChild('vorteile', { static: true })
  private vorteile;

  @ViewChild('mehr', {static: true})
  private mehr;

  public beitrag: Beitrag;
  public beitragUnten: Beitrag;
  public leistungUnten: Leistung;

  public constructor(
    private router: Router,
    private scrollToService: ScrollToService) { }

  public ngOnInit() {
    this.scrollToService.getEvent().subscribe(event => this.scroll(this.getElement(event)));
  }

  public scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  public setBeitrag(beitrag: Beitrag) {
    this.beitrag = beitrag;
  }

  public setBeitragUnten(beitrag: Beitrag) {
    this.beitragUnten = beitrag;
  }

  public abgeschlossen() {
    this.router.navigate(['/abgeschlossen']);
  }

  private getElement(name: string): HTMLElement {
    switch (name) {
      case 'abschluss':
        return this.abschluss.nativeElement;
      case 'vorteile':
        return this.vorteile.nativeElement;
      case 'mehr':
        return this.mehr.nativeElement;
      default:
        return this.andere.nativeElement;
    }
  }
}
