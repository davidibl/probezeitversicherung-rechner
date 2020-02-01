import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AbschlussstreckeComponent } from './components/abschlussstrecke';
import { AbgeschlossenComponent } from './components/abgeschlossen';
import { ImpressumComponent } from './components/impressum';

export const routes: Routes = [
    { component: AbschlussstreckeComponent, path: '', pathMatch: 'full' },
    { component: AbgeschlossenComponent, path: 'abgeschlossen', pathMatch: 'full' },
    { component: ImpressumComponent, path: 'impressum', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
