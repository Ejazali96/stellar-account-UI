import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CommonModule, SafeHtmlPipe],
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
    @Input() product!: Product;
    @Output() actionClick = new EventEmitter<{ productId: string, action: string }>();

    onActionClick(action: string): void {
        this.actionClick.emit({ productId: this.product.id, action });
    }
}
