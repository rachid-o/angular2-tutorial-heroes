import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
        setTimeout(() => resolve(HEROES), 4000) // 4 seconds
    );
    }    
}
