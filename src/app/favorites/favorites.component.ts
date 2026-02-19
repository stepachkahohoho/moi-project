import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from '../cat.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Cat[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.catService.getFavorites();
  }

  removeFromFavorites(cat: Cat): void {
    this.catService.toggleFavorite(cat.id);
    this.loadFavorites();
  }
}
