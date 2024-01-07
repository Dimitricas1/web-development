import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


const url='https://api.coinpaprika.com/v1';

@Injectable({
  providedIn: 'root'
})
export class GetcoinsService {

  http = inject(HttpClient);

  constructor() { }
  
  response: any;
  statusCode: any;

  getCoinById(id: string) {
    return this.http.get(`${url}/coins/${id}`);
  }

  getListCoins(){
    return this.http.get(`${url}/coins`);
  }
}
