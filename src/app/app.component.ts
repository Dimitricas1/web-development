import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HeroesComponent, RouterOutlet]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
