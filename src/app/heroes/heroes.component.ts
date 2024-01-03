import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero=hero;
  }

  heroes = HEROES;

}
