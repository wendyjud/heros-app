import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 50, name: 'Dr wendy', puntos: 4 },
      { id: 12, name: 'Narco',puntos:8},
      { id: 13, name: 'Bombasto',puntos: 15 },
      { id: 14, name: 'Celeritas',puntos: 6 },
      { id: 35, name: 'Magneta',puntos: 10 },
      { id: 16, name: 'RubberMan',puntos: 3 },
      { id: 17, name: 'Dynama',puntos: 12 },
      { id: 18, name: 'Dr IQ',puntos: 11 },
      { id: 19, name: 'Magma',puntos: 50 },
      { id: 20, name: 'Tornado',puntos: 41 }
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