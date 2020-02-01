import { Component } from '@angular/core';
import { ScrollToService } from './services/scrollToService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(
    private scrollToService: ScrollToService,
    private router: Router) {}

  public scroll(name: string) {
    this.scrollToService.scrollTo(name);
  }

  public openDatenschutz() {
    this.goto('datenschutz');
  }

  public openImpressum() {
    this.goto('impressum');
  }

  public goto(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
