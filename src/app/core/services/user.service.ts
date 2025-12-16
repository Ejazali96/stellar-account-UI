import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // Mock user data - easily replaceable with HTTP calls
    private mockUser: User = {
        name: 'Blerim Cazimi',
        email: 'blerim@example.com',
        initials: 'BC'
    };

    constructor() { }

    /**
     * Get current user
     * TODO: Replace with actual HTTP call to API
     * Example: return this.http.get<User>('/api/user/current');
     */
    getCurrentUser(): Observable<User> {
        return of(this.mockUser);
    }

    /**
     * Update user profile
     * TODO: Replace with actual HTTP call to API
     */
    updateUser(user: User): Observable<User> {
        this.mockUser = user;
        return of(user);
    }
}
