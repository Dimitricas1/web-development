import { Component, OnInit } from '@angular/core';
import { GetcoinsService } from '../services/getcoins.service';

@Component({
  selector: 'app-coin',
  standalone: true,
  imports: [],
  templateUrl: './coin.component.html',
  styleUrl: './coin.component.css'
})
export class CoinComponent implements OnInit {
  constructor(private getCoinsService: GetcoinsService){}

  ngOnInit(): void {
    this.getCoinById(id);
  }

  getCoinById(id: string):void{
    this.getCoinsService.getCoinById(id).subscribe();
  }
}
