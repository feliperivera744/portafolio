import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { heros } from '../mock-herp';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero: Hero[] | null = heros;

  constructor() {}

  get_heroes(): Hero[] {
    return this.hero;
  }

  get_hero(id: number): Hero | null {
    return this.hero.find((r) => r.id === id);
  }
}
