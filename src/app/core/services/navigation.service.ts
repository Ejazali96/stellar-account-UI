import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NavigationItem } from '../models/navigation.model';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    // Mock navigation items - can be made dynamic based on user permissions
    private mockNavigationItems: NavigationItem[] = [
        { icon: 'fa-solid fa-grip', label: 'Dashboard', route: '/dashboard' },
        { icon: 'fa-solid fa-shield-virus', label: 'Antivirus', route: '/antivirus' },
        { icon: 'fa-solid fa-file-invoice-dollar', label: 'Billing', route: '/billing' },
        { icon: 'fa-solid fa-shield-halved', label: 'Security', route: '/security' },
        { icon: 'fa-solid fa-gear', label: 'Settings', route: '/settings' },
        { icon: 'fa-solid fa-headset', label: 'Support', route: '/support' },
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
