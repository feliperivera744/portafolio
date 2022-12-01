import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes!: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.get_heroes();
  }

}
