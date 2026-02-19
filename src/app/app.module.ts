import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    MainComponent,
    FavoritesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
