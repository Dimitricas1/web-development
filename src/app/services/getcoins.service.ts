import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';


const url='https://dummyjson.com';

@Injectable({
  providedIn: 'root'
})
export class GetcoinsService {

  http = inject(HttpClient);

  constructor() { }
  
  response: any;
  statusCode: any;

  getCoinById(id: string) {
    return this.http.get(`${url}/products/${id}`);
  }

  getListCoins(){
    return this.http.get<any>(`${url}/products`).pipe(map(response => response.products));
  }
}
