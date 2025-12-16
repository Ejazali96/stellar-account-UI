import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationItem } from '../../core/models/navigation.model';
import { User } from '../../core/models/user.model';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    @Input() navigationItems: NavigationItem[] = [];
    @Input() user: User | null = null;
    @Output() signOut = new EventEmitter<void>();

    onSignOut(): void {
        this.signOut.emit();
    }
}
