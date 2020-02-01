import { Component } from '@angular/core';
import { Beitrag } from './models/beitrag';
import { Leistung } from './models/leistung';
import { ScrollToService } from './services/scrollToService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private scrollToService: ScrollToService) {}

  public scroll(name: string) {
    this.scrollToService.scrollTo(name);
  }
}
