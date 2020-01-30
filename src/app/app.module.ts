import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatAutocompleteModule,
  MatCardModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatGridListModule,
  MatButtonModule,
  MatStepperModule,
  MatDividerModule,
  MatMenuModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PreventCharsDirective } from './directives/preventCharsDirective';
import { ShiftPosition } from './pipes/splitPipe';
import { RechnerComponent } from './components/rechner';
import { LeistungComponent } from './components/leistung';
import { BeitragZahlweiseComponent } from './components/beitragZahlweise';

@NgModule({
  declarations: [
    AppComponent,
    PreventCharsDirective,
    ShiftPosition,
    RechnerComponent,
    LeistungComponent,
    BeitragZahlweiseComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule,
    MatStepperModule,
    MatDividerModule,
    MatMenuModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
