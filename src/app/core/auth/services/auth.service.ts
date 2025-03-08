import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.baseUrl + '/users';
  private authStateSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  private userRoleSubject = new BehaviorSubject<string | null>(
    this.getUserRole()
  );
  private userNameSubject = new BehaviorSubject<string | null>(
    this.getUserName()
  );

  authState$ = this.authStateSubject.asObservable();
  userRole$ = this.userRoleSubject.asObservable();
  userName$ = this.userNameSubject.asObservable();

  constructor(private router: Router, private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(
        tap((users) => {
          if (users.length > 0) {
            const user = users[0];
            this.setAuthState(true, user.role, user.name);
            this.router.navigate(['/dashboard']);
          } else {
            this.setAuthState(false, null, null);
            throw new Error('Invalid credentials');
          }
        })
      );
  }

  private setAuthState(
    isAuth: boolean,
    role: string | null,
    userName: string | null
  ): void {
    if (isAuth) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('role', role!);
      localStorage.setItem('userName', userName!);
    } else {
      localStorage.removeItem('auth');
      localStorage.removeItem('role');
      localStorage.removeItem('userName');
    }
    this.authStateSubject.next(isAuth);
    this.userRoleSubject.next(role);
    this.userNameSubject.next(userName);
  }

  logout(): void {
    this.setAuthState(false, null, null);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('auth') === 'true';
  }

  getUserRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }
}
