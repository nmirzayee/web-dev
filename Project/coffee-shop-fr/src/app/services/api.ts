import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  // LOGIN
  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login/', data);
  }

  // REGISTER
  register(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'register/', data);
  }

  // GET PRODUCTS
  getProducts(): Observable<any> {
    return this.http.get(this.baseUrl + 'products/');
  }

  // CREATE ORDER
  createOrder(data: any): Observable<any> {
    return this.http.post(this.baseUrl + 'orders/', data);
  }

  // GET ORDERS
  getOrders(): Observable<any> {
    return this.http.get(this.baseUrl + 'orders/');
  }
}