import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    const currentUrl = this.router.url;
    const userRole = this.authService.getUserRole();
    if (
      userRole !== 'admin' &&
      !currentUrl.includes('/dashboard') &&
      !currentUrl.includes('/auth')
    ) {
      this.authService.logout();
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }
}
