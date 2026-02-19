import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { AuthService } from '../auth.service';
import { Cat } from '../cat.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  allCats: Cat[] = [];
  filteredCats: Cat[] = [];
  searchQuery = '';
  selectedTag = '';
  tags = ['рыжий', 'полосатый', 'черный', 'серый', 'белый', 'ласковый', 'игривый', 'спокойный', 'хитрый', 'веселый', 'пушистый', 'ленивый', 'активный', 'важный', 'царский', 'добрый', 'хозяйственный', 'толстый', 'охотник', 'сладкий', 'смелый'];
  showTagDropdown = false;

  constructor(public catService: CatService, public auth: AuthService) {}

  ngOnInit(): void {
    this.allCats = this.catService.getCats();
    this.filteredCats = [...this.allCats];
  }

  filter(): void {
    this.filteredCats = this.allCats.filter(cat => {
      const matchesSearch = cat.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesTag = this.selectedTag ? cat.tags.includes(this.selectedTag) : true;
      return matchesSearch && matchesTag;
    });
  }

  toggleFavorite(cat: Cat, event: Event): void {
    event.stopPropagation();
    this.catService.toggleFavorite(cat.id);
  }

  setAvatar(cat: Cat): void {
    this.auth.avatar = cat.image;
  }

  selectTag(tag: string): void {
    this.selectedTag = tag;
    this.filter();
    this.showTagDropdown = false;
  }

  clearTagFilter(): void {
    this.selectedTag = '';
    this.filter();
    this.showTagDropdown = false;
  }

  isFavorite(cat: Cat): boolean {
    return this.catService.isFavorite(cat.id);
  }
}
