import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationItem } from '../models/navigation.model';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    // Mock navigation items - can be made dynamic based on user permissions
    private mockNavigationItems: NavigationItem[] = [
        { icon: '🏠', label: 'Dashboard', route: '/dashboard' },
        { icon: '🧩', label: 'Products & devices', route: '/products' },
        { icon: '🔐', label: 'Security & 2FA', route: '/security' },
        { icon: '💳', label: 'Billing & invoices', route: '/billing' },
        { icon: '⚙️', label: 'Settings', route: '/settings' },
        { icon: '💬', label: 'Support', route: '/support' }
    ];

    constructor() { }

    /**
     * Get navigation items
     * TODO: Can be enhanced to filter based on user permissions
     */
    getNavigationItems(): Observable<NavigationItem[]> {
        return of(this.mockNavigationItems);
    }

    /**
     * Set active navigation item
     */
    setActiveItem(route: string): void {
        this.mockNavigationItems.forEach(item => {
            item.active = item.route === route;
        });
    }
}
