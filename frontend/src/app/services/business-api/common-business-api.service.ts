import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { PaymentFormData } from '../../components/payment-form/payment.model';
import { Transaction } from '../../components/transactions/transaction.model';
import { AppDataService } from '../data-service/data.service';

@Injectable({
  providedIn: 'root',
})
export class CommonBusinessApiService {
  constructor(private http: HttpClient, private dataService: AppDataService) {}

  getAccounts(iban: string): Observable<any> {
    return this.http.get(`http://localhost:3000/accounts?iban=${iban}`).pipe(
      tap(accountsData => this.dataService.setAccountsData(accountsData))
    );
  }

  getTransactions(iban: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`http://localhost:3000/accounts/transactions?iban=${iban}`).pipe(
      tap(transactionsData => this.dataService.setTransactionsData(transactionsData)),
      catchError(error => {
        console.error('Error fetching transactions:', error);
        return of([]);
      })
    );
  }
  makePayment(paymentData: PaymentFormData): Observable<any> {
    return this.http.post('http://localhost:3000/payment', paymentData).pipe(
      switchMap((_response) => {
        return this.getTransactions(paymentData.iban);
      }),
      catchError(error => {
        console.error('Error processing payment:', error);
        return throwError(() => new Error('Payment processing failed. Please try again.'));
      })
    );
  }
}
