import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AntivirusComponent } from './features/antivirus/antivirus.component';
import { BillingComponent } from './features/billing/billing.component';
import { SecurityComponent } from './features/security/security.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'antivirus', component: AntivirusComponent },
    { path: 'billing', component: BillingComponent },
    { path: 'security', component: SecurityComponent },
    // Future routes can be added here
    // { path: 'security', component: SecurityComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: 'support', component: SupportComponent },
];
