import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  styleUrls: ['app/hero-detail.component.css'],
  templateUrl: 'app/hero-detail.component.html',
})

export class HeroDetailComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }
    @Input()
    hero: Hero;
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    }
    goBack() {
        window.history.back();
    }        
}
