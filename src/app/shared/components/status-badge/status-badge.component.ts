import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStatus } from '../../../core/models/product.model';

@Component({
    selector: 'app-status-badge',
    standalone: true,
    imports: [CommonModule],
    template: `
    <span [class]="getBadgeClass()">
      <span class="badge-dot" [class.badge-dot-success]="status === 'Active' || status === 'Enabled'"></span>
      <span>{{ status }}</span>
    </span>
  `,
    styles: [`
    :host {
      display: inline-flex;
    }
  `]
})
export class StatusBadgeComponent {
    @Input() status: ProductStatus = ProductStatus.ACTIVE;

    getBadgeClass(): string {
        const baseClass = 'badge';

        switch (this.status) {
            case ProductStatus.ACTIVE:
            case ProductStatus.ENABLED:
                return `${baseClass} badge-success`;
            case ProductStatus.INACTIVE:
                return `${baseClass} badge-warning`;
            default:
                return `${baseClass} badge-info`;
        }
    }
}
