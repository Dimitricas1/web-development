import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coin } from '../coin';
import { Observable } from 'rxjs';

const url='https://api.coinpaprika.com/v1/global';

@Injectable({
  providedIn: 'root'
})
export class GetcoinsService {

  constructor(private http: HttpClient) { }
  

  getCoinById(id: string): Observable<Coin> {
    return this.http.get<Coin>(`${url}/coins/${id}`);
  }

}
