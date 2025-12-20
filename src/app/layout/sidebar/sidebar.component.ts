import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavigationItem } from '../../core/models/navigation.model';
import { User } from '../../core/models/user.model';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    animations: [
        trigger('expandCollapse', [
            state('collapsed', style({
                height: '0',
                opacity: '0',
                overflow: 'hidden'
            })),
            state('expanded', style({
                height: '*',
                opacity: '1',
                overflow: 'visible'
            })),
            transition('collapsed <=> expanded', [
                animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
            ])
        ])
    ]
})
export class SidebarComponent {
    @Input() navigationItems: NavigationItem[] = [];
    @Input() user: User | null = null;
    @Output() signOut = new EventEmitter<void>();

    isCollapsed = false;
    isInfoBoxExpanded = true;

    toggleSidebar(): void {
        this.isCollapsed = !this.isCollapsed;
    }

    toggleInfoBox(): void {
        if (!this.isCollapsed) {
            this.isInfoBoxExpanded = !this.isInfoBoxExpanded;
        }
    }

    onSignOut(): void {
        this.signOut.emit();
    }
}
