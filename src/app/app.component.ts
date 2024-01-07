import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin/coin.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { GetcoinsService } from './services/getcoins.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoinComponent, ScrollingModule, MatDividerModule, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule, ScrollingModule]
})
export class AppComponent implements OnInit {
  title = 'coinpaprika';
  currencies: any;
  constructor(){}
  coins = inject(GetcoinsService);

  ngOnInit(): void {
    this.getListCoins();
  }

  getListCoins(){
    this.coins.getListCoins().subscribe(data => this.currencies = data);
    console.log('error');
  }
}
