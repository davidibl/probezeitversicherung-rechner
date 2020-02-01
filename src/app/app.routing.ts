import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AbschlussstreckeComponent } from './components/abschlussstrecke';
import { AbgeschlossenComponent } from './components/abgeschlossen';

export const routes: Routes = [
    { component: AbschlussstreckeComponent, path: '', pathMatch: 'full' },
    { component: AbgeschlossenComponent, path: 'abgeschlossen', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
