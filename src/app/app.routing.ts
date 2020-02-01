import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AbschlussstreckeComponent } from './components/abschlussstrecke';

export const routes: Routes = [
    { component: AbschlussstreckeComponent, path: '', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
