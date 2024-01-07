import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin/coin.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoinComponent, ScrollingModule, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClientModule, ScrollingModule]
})
export class AppComponent {
  title = 'coinpaprika';
  currencies = ['btc-bitcoin', 'eth-ethereum', 'usdt-tether', 'bnb-binance-coin', 'sol-solana', 'xrp-xrp'];
  constructor(){}
}
