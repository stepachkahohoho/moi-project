import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  username = '';

  constructor(private auth: AuthService, private router: Router) {}

  continue(): void {
    if (this.username.trim()) {
      this.auth.login(this.username.trim());
      this.router.navigate(['/main']);
    }
  }
}
