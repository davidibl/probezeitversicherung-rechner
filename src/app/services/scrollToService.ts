import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScrollToService {
  private scrollToEvent = new Subject<string>();

  public getEvent() {
    return this.scrollToEvent.asObservable();
  }

  public scrollTo(name: string) {
    this.scrollToEvent.next(name);
  }
}
