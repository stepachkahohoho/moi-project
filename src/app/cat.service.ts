import { Injectable } from '@angular/core';
import { Cat } from './cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private allCats: Cat[] = [
    { id: 1, name: 'Пушистик', tags: ['рыжий', 'ласковый'], image: 'assets/cats/cat1.jpg' },
    { id: 2, name: 'Барсик', tags: ['полосатый', 'игривый'], image: 'assets/cats/cat2.jpg' },
    { id: 3, name: 'Мурка', tags: ['черный', 'спокойный'], image: 'assets/cats/cat3.jpg' },
    { id: 4, name: 'Васька', tags: ['серый', 'хитрый'], image: 'assets/cats/cat4.jpg' },
    { id: 5, name: 'Рыжик', tags: ['рыжий', 'веселый'], image: 'assets/cats/cat5.jpg' },
    { id: 6, name: 'Снежок', tags: ['белый', 'пушистый'], image: 'assets/cats/cat6.jpg' },
    { id: 7, name: 'Тимоша', tags: ['полосатый', 'ленивый'], image: 'assets/cats/cat7.jpg' },
    { id: 8, name: 'Кузя', tags: ['черный', 'активный'], image: 'assets/cats/cat8.jpg' },
    { id: 9, name: 'Маркиз', tags: ['серый', 'важный'], image: 'assets/cats/cat9.jpg' },
    { id: 10, name: 'Симба', tags: ['рыжий', 'царский'], image: 'assets/cats/cat10.jpg' },
    { id: 11, name: 'Леопольд', tags: ['серый', 'добрый'], image: 'assets/cats/cat11.jpg' },
    { id: 12, name: 'Матроскин', tags: ['полосатый', 'хозяйственный'], image: 'assets/cats/cat12.jpg' },
    { id: 13, name: 'Гарфилд', tags: ['рыжий', 'толстый'], image: 'assets/cats/cat13.jpg' },
    { id: 14, name: 'Том', tags: ['серый', 'охотник'], image: 'assets/cats/cat14.jpg' },
    { id: 15, name: 'Кекс', tags: ['белый', 'сладкий'], image: 'assets/cats/cat15.jpg' },
    { id: 16, name: 'Пират', tags: ['черный', 'смелый'], image: 'assets/cats/cat16.jpg' }
  ];

  private readonly FAV_KEY = 'cat_favorites';

  getCats(): Cat[] {
    return [...this.allCats];
  }

  getFavorites(): Cat[] {
    const favIds = JSON.parse(localStorage.getItem(this.FAV_KEY) || '[]');
    return this.allCats.filter(cat => favIds.includes(cat.id));
  }

  toggleFavorite(catId: number): boolean {
    const favIds: number[] = JSON.parse(localStorage.getItem(this.FAV_KEY) || '[]');
    const index = favIds.indexOf(catId);
    if (index === -1) {
      favIds.push(catId);
    } else {
      favIds.splice(index, 1);
    }
    localStorage.setItem(this.FAV_KEY, JSON.stringify(favIds));
    return index === -1;
  }

  isFavorite(catId: number): boolean {
    const favIds = JSON.parse(localStorage.getItem(this.FAV_KEY) || '[]');
    return favIds.includes(catId);
  }
}
