import { Component } from '@angular/core';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private authService: AuthService) {}

  isAdmin(): boolean {
    return this.authService.getUserRole() === 'admin';
  }
}
