import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavigationItem } from './core/models/navigation.model';
import { User } from './core/models/user.model';
import { NavigationService } from './core/services/navigation.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'stellar-account';
  navigationItems$!: Observable<NavigationItem[]>;
  currentUser$!: Observable<User>;

  constructor(
    private navigationService: NavigationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.navigationItems$ = this.navigationService.getNavigationItems();
    this.currentUser$ = this.userService.getCurrentUser();
  }

  onSignOut(): void {
    console.log('Sign out clicked');
    // TODO: Implement actual sign out logic
    alert('Sign out functionality will be implemented with authentication');
  }
}
