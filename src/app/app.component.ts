import { Component, Inject } from '@angular/core';
import { ScrollToService } from './services/scrollToService';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AbschlussstreckeComponent } from './components/abschlussstrecke';
import { filter, map } from 'rxjs/operators';
import { routing, routes } from './app.routing';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private routes = routes;
  private scrollingElement;

  public showShadow = false;

  public isOnAbschlussstrecke = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd),
      map(event => this.isNavigatedToStart(event.url))
    );

  public isImpressum = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd),
      map(event => this.isImpressumUrl(event.url))
    );

  public isDatenschutz = this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd),
      map(event => this.isDatenschutzUrl(event.url))
    );

  public constructor(
    private scrollToService: ScrollToService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {

      this.scrollingElement = this.document.scrollingElement ||
      this.document.documentElement;

      document.onscroll = () => {
          this.showShadow = this.scrollingElement.scrollTop > 10;
      };
  }

  public scroll(name: string) {
    if (this.routes.filter(route => route.path.indexOf(name) > -1).length > 0) {
      this.goto(name);
      return;
    }
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

  private isNavigatedToStart(url: string) {
    return url.length < 2;
  }

  private isImpressumUrl(url: string) {
    return url.indexOf('impressum') > -1;
  }

  private isDatenschutzUrl(url: string) {
    return url.indexOf('datenschutz') > -1;
  }
}
