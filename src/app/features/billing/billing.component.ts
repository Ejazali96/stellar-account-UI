import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-billing',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './billing.component.html',
    styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        console.log('Billing component initialized');
    }

}
