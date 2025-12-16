import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    // Future routes can be added here
    // { path: 'security', component: SecurityComponent },
    // { path: 'billing', component: BillingComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: 'support', component: SupportComponent },
];
