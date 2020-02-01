import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PreventCharsDirective } from './directives/preventCharsDirective';
import { ShiftPosition } from './pipes/splitPipe';
import { RechnerComponent } from './components/rechner';
import { LeistungComponent } from './components/leistung';
import { BeitragZahlweiseComponent } from './components/beitragZahlweise';
import { CalculationService } from './services/calculationService';
import { AnalyticsService } from './services/analyticsService';
import { BerufeService } from './services/berufeService';
import { AbschlussstreckeComponent } from './components/abschlussstrecke';

@NgModule({
  declarations: [
    AppComponent,
    PreventCharsDirective,
    ShiftPosition,
    RechnerComponent,
    LeistungComponent,
    BeitragZahlweiseComponent,
    AbschlussstreckeComponent,
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
    RouterModule,
    routing,
  ],
  providers: [
    CalculationService,
    AnalyticsService,
    BerufeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
