import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AbschlussstreckeComponent } from './components/abschlussstrecke';
import { AbgeschlossenComponent } from './components/abgeschlossen';
import { ImpressumComponent } from './components/impressum';
import { DatenschutzComponent } from './components/datenschutz';

export const routes: Routes = [
    { component: AbschlussstreckeComponent, path: '', pathMatch: 'full' },
    { component: AbschlussstreckeComponent, path: 'start', pathMatch: 'full' },
    { component: AbgeschlossenComponent, path: 'abgeschlossen', pathMatch: 'full' },
    { component: ImpressumComponent, path: 'impressum', pathMatch: 'full' },
    { component: DatenschutzComponent, path: 'datenschutz', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
