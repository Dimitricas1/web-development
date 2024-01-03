import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +<string>this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack():void{
    this.location.back();
  }

}