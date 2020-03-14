import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AbschlussstreckeComponent } from './components/abschlussstrecke';
import { AbgeschlossenComponent } from './components/abgeschlossen';
import { ImpressumComponent } from './components/impressum';
import { DatenschutzComponent } from './components/datenschutz';
import { RechnerOnlyComponent } from './components/rechnerOnly';
import { SiteContainerComponent } from './components/siteContainer';
import { WerteOnlyComponent } from './components/werteOnly';
import { RechnerCompleteComponent } from './components/rechnerComplete';

export const routes: Routes = [
  { component: SiteContainerComponent, path: '', pathMatch: 'full',
    children: [
      { component: AbschlussstreckeComponent, path: '', pathMatch: 'full' },
      { component: AbschlussstreckeComponent, path: 'start', pathMatch: 'full' },
      { component: AbgeschlossenComponent, path: 'abgeschlossen', pathMatch: 'full' },
      { component: ImpressumComponent, path: 'impressum', pathMatch: 'full' },
      { component: DatenschutzComponent, path: 'datenschutz', pathMatch: 'full' }
    ]
  },
  { component: RechnerOnlyComponent, path: 'rechner', pathMatch: 'full' },
  { component: WerteOnlyComponent, path: 'werte', pathMatch: 'full' },
  { component: RechnerCompleteComponent, path: 'complete', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
