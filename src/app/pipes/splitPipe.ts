import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'split' })
export class ShiftPosition implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.substr(1) + ' ' + value.substr(0, 1);
  }
}
