/**
* defines RMM App routes
*/
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';

import { BookingDetailsComponent } from './dashboard/bookingDetail.component';




const appRoutes: Routes = [


    { path: '', redirectTo: 'dashboard', pathMatch: "full" },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bookingDetail', component: BookingDetailsComponent },






];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });