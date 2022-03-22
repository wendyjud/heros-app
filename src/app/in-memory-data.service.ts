import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Spiderman', puntos: 90 },
      { id: 2, name: 'Ironman',puntos:95},
      { id: 3, name: 'Capitán América',puntos: 93 },
      { id: 4, name: 'Thor',puntos: 60 },
      { id: 5, name: 'Viuda Negra',puntos: 50 },
      { id: 6, name: 'Hulk',puntos: 80 },
      { id: 7, name: 'Doctor Strange',puntos: 50 },
      { id: 8, name: 'Tormenta',puntos: 30 },
      { id: 9, name: 'Jean Grey',puntos: 45 },
      { id: 10, name: 'Gata Negra',puntos: 35 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {

    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    
  }
}