import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
