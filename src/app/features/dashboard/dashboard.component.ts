import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductService } from '../../core/services/product.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
    selector: 'app-dashboard', 
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    products$!: Observable<Product[]>;
    connectedProductsCount = 5;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.products$ = this.productService.getProducts();
    }

    onProductAction(event: { productId: string, action: string }): void {
        console.log('Product action:', event);
        // TODO: Implement actual action handling
        // This will be replaced with actual navigation or API calls
        alert(`Action: ${event.action} for product: ${event.productId}`);
    }
}
