import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductStatus } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // Mock data - easily replaceable with HTTP calls
    // Mock data
    // Mock data
    private mockProducts: Product[] = [
        {
            id: '1',
            name: 'Stellar VPN',
            title: 'Stellar VPN · Unlimited',
            description: 'Hide your location and browse privately across all your devices.',
            status: ProductStatus.ACTIVE,
            deviceInfo: '3 / 5 devices',
            actions: [
                { label: 'Open VPN devices', primary: true, action: 'open-vpn' },
                { label: 'Manage subscription', primary: false, action: 'manage-subscription' }
            ],
            icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>',
            link: '/vpn'
        },
        {
            id: '2',
            name: 'Stellar Antivirus',
            title: 'Antivirus · 3 devices',
            description: 'Protect your Mac and Windows devices against malware and unwanted software.',
            status: ProductStatus.ACTIVE,
            deviceInfo: '2 / 3 devices',
            actions: [
                { label: 'Open Antivirus dashboard', primary: true, action: 'open-antivirus' },
                { label: 'Manage subscription', primary: false, action: 'manage-subscription' }
            ],
            icon: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>',
            link: '/antivirus'
        },
        {
            id: '3',
            name: 'Stellar Private Notes',
            title: 'Private Notes · Premium',
            description: 'Private, end-to-end encrypted notes and documents synced across your devices.',
            status: ProductStatus.ACTIVE,
            deviceInfo: 'Synced on 2 devices',
            actions: [
                { label: 'Open Private Notes', primary: true, action: 'open-notes' },
                { label: 'Manage subscription', primary: false, action: 'manage-subscription' }
            ],
            icon: '<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>',
            link: '/notes'
        },
        {
            id: '4',
            name: 'Stellar Protect',
            title: 'Device Protect',
            description: 'Remote wipe, tamper detection and USB kill-switch for your Stellar devices.',
            status: ProductStatus.ENABLED,
            deviceInfo: '3 protected devices',
            actions: [
                { label: 'Manage Protect rules', primary: true, action: 'manage-protect' },
                { label: 'View devices', primary: false, action: 'view-devices' }
            ],
            icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>',
            link: '/protect'
        },
        {
            id: '5',
            name: 'Stellar Secret',
            title: 'One-time links',
            description: 'Create private links that disappear after they are opened. Perfect for passwords and sensitive details.',
            status: ProductStatus.ACTIVE,
            deviceInfo: 'Uses Stellar ID',
            actions: [
                { label: 'Open Stellar Secret', primary: true, action: 'open-secret' }
            ],
            icon: '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3 3.1-3 1.71 0 3.1 1.29 3.1 3v2z"/>',
            link: '/secret'
        }
    ];

    constructor() { }

    /**
     * Get all products
     * TODO: Replace with actual HTTP call to API
     * Example: return this.http.get<Product[]>('/api/products');
     */
    getProducts(): Observable<Product[]> {
        return of(this.mockProducts);
    }

    /**
     * Get product by ID
     * TODO: Replace with actual HTTP call to API
     */
    getProductById(id: string): Observable<Product | undefined> {
        const product = this.mockProducts.find(p => p.id === id);
        return of(product);
    }

    /**
     * Update product
     * TODO: Replace with actual HTTP call to API
     */
    updateProduct(product: Product): Observable<Product> {
        const index = this.mockProducts.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.mockProducts[index] = product;
        }
        return of(product);
    }
}
