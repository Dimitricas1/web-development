import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Hero Service: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(<Hero>HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
