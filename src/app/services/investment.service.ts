import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  private apiUrl = 'http://localhost:44318/api/investment/calculate';

  constructor(private http: HttpClient) { }

  calculateInvestment(initialAmount: number, months: number): Observable<any> {
    const requestData = {
      initialAmount: initialAmount,
      months: months
    };
    return this.http.post<any>(this.apiUrl, requestData);
  }
}
