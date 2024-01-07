import { Component, inject, Input, OnInit } from '@angular/core';
import { GetcoinsService } from '../services/getcoins.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-coin',
  standalone: true,
  imports: [ CommonModule, MatCardModule, MatProgressSpinnerModule ],
  templateUrl: './coin.component.html',
  styleUrl: './coin.component.css'
})

export class CoinComponent implements OnInit {

  @Input() id!: string;

  currency: any;

  constructor(){}

  coins=inject(GetcoinsService);

  ngOnInit(): void {
    this.getCoinById(this.id);
    console.log('Fetching');
  }

  getCoinById(id: string){
    this.coins.getCoinById(id).subscribe(currency => this.currency = currency);
  }
}
