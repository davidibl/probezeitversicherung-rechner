import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventChars]',
})
export class PreventCharsDirective {

  private regex = '^[0-9]*$';

  public constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  public onKeyPress(event) {
    return new RegExp(this.regex).test(event.key);
  }
}
