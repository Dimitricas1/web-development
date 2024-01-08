import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


const URL='https://api.coinpaprika.com/v1';
//const URL='https://dummyjson.com';
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
    return this.http.get<HttpResponse<any>>(`${URL}/coins/${id}`, {observe: 'response'});
  }

  getListCoins(){
    return this.http.get<HttpResponse<string>>(`${URL}/coins`, {observe: 'response'});
    //return this.http.get<HttpResponse<string>>(`${URL}/http/402`, {observe: 'response'});
  }

  getExchangeCourseByBaseCurrency(baseId: string){
    const OPTIONS = new HttpParams()
      .set('base_currency_id', baseId)
      .set('quote_currency_id', EXCHANGE_QUOTE_CURRENCY)
      .set('amount', 1);
    return this.http.get<HttpResponse<string>>(`${URL}/price-converter`, {params: OPTIONS, observe: 'response'});
  }
}
