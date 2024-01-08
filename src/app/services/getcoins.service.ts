import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';


const URL='https://api.coinpaprika.com/v1';
const EXCHANGE_QUOTE_CURRENCY: string = 'usd-us-dollars';

@Injectable({
  providedIn: 'root'
})
export class GetcoinsService {

  http = inject(HttpClient);

  constructor() { }
  
  response: any;
  statusCode: any;

  getCoinById(id: string) {
    return this.http.get<any>(`${URL}/coins/${id}`).pipe(map((data) => {
      if (data.description === ''){
        data.description = 'Сервис не предоставил описание';
        return data;
      }
      else
      {
        return data;
      }
    }));
  }

  getListCoins(){
    return this.http.get<any>(`${URL}/coins`);
  }

  getExchangeCourseByBaseCurrency(baseId: string){
    const OPTIONS = new HttpParams()
      .set('base_currency_id', baseId)
      .set('quote_currency_id', EXCHANGE_QUOTE_CURRENCY)
      .set('amount', 1);
    return this.http.get<any>(`${URL}/price-converter`, {params: OPTIONS});
  }
}
