import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatInputModule, MatAutocompleteModule, MatChipsModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PreventCharsDirective } from './directives/preventCharsDirective';
import { ShiftPosition } from './pipes/splitPipe';

@NgModule({
  declarations: [
    AppComponent,
    PreventCharsDirective,
    ShiftPosition,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatCardModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
