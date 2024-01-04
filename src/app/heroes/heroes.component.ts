import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, CommonModule, HeroDetailComponent, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  heroes: Hero[];

  add(name: string): void{
    name=name.trim();
    if(!name) return;
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
