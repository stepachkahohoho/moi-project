import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  avatarPreview: string;
  defaultAvatar = 'assets/default-avatar.png';

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]]
    });
    this.avatarPreview = auth.avatar;
  }

  ngOnInit(): void {
    this.profileForm.patchValue({ username: this.auth.username });
  }

  onAvatarSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.avatarPreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      this.auth.updateProfile(this.profileForm.value.username, this.avatarPreview);
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
