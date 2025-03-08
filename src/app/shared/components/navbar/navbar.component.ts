import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  username: string = '';

  constructor(private authService: AuthService) {
    this.username = this.getUserName();
  }

  logout() {
    this.authService.logout();
  }

  getUserName(): string {
    return this.authService.getUserName() ?? '';
  }
}
