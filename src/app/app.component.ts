import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinComponent } from './coin/coin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoinComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coinpaprika';
}
