import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'cat_user';
  private readonly AVATAR_KEY = 'cat_avatar';

  constructor(private router: Router) {}

  login(username: string): void {
    localStorage.setItem(this.USER_KEY, username);
    if (!localStorage.getItem(this.AVATAR_KEY)) {
      localStorage.setItem(this.AVATAR_KEY, 'assets/default-avatar.png');
    }
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.setItem(this.AVATAR_KEY, 'assets/default-avatar.png');
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }

  get username(): string {
    return localStorage.getItem(this.USER_KEY) || '';
  }

  get avatar(): string {
    return localStorage.getItem(this.AVATAR_KEY) || 'assets/default-avatar.png';
  }

  set avatar(src: string) {
    localStorage.setItem(this.AVATAR_KEY, src);
  }

  updateProfile(username: string, avatar: string): void {
    localStorage.setItem(this.USER_KEY, username);
    localStorage.setItem(this.AVATAR_KEY, avatar);
  }
}
