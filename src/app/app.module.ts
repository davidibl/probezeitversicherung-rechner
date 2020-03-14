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
  MatMenuModule,
  MatTooltipModule
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
import { AbgeschlossenComponent } from './components/abgeschlossen';
import { ScrollToService } from './services/scrollToService';
import { ImpressumComponent } from './components/impressum';
import { DatenschutzComponent } from './components/datenschutz';
import { UnsereStoryComponent } from './components/unsereStory';
import { RechnerOnlyComponent } from './components/rechnerOnly';
import { SiteContainerComponent } from './components/siteContainer';
import { WerteOnlyComponent } from './components/werteOnly';
import { RechnerCompleteComponent } from './components/rechnerComplete';

@NgModule({
  declarations: [
    AppComponent,
    PreventCharsDirective,
    ShiftPosition,
    RechnerComponent,
    LeistungComponent,
    BeitragZahlweiseComponent,
    AbschlussstreckeComponent,
    AbgeschlossenComponent,
    ImpressumComponent,
    DatenschutzComponent,
    UnsereStoryComponent,
    SiteContainerComponent,
    RechnerOnlyComponent,
    WerteOnlyComponent,
    LeistungComponent,
    RechnerCompleteComponent,
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
    MatTooltipModule,
    RouterModule,
    routing,
  ],
  providers: [
    CalculationService,
    AnalyticsService,
    BerufeService,
    ScrollToService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
