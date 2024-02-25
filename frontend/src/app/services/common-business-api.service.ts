import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PaymentFormData } from '../components/payment-form/payment.model';

@Injectable({
  providedIn: 'root'
})
export class CommonBusinessApiService {
  // Subject to hold accounts data
  private accountsDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  // Observable to expose accounts data
  accountsData$: Observable<any> = this.accountsDataSubject.asObservable();

  // Subject to hold transactions data
  private transactionsDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  // Observable to expose transactions data
  transactionsData$: Observable<any> = this.transactionsDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Method to fetch accounts data from API
  getAccounts(iban: string): Observable<any> {
    return this.http.get(`http://localhost:3000/accounts?iban=${iban}`).pipe(
      // Tap into the observable stream to store the fetched accounts data
      tap(accountsData => this.setAccountsData(accountsData))
    );
  }

  // Method to fetch transactions data from API
  getTransactions(iban: string): Observable<any> {
    return this.http.get(`http://localhost:3000/accounts/transactions?iban=${iban}`).pipe(
      // Tap into the observable stream to store the fetched transactions data
      tap(transactionsData => this.setTransactionsData(transactionsData))
    );
  }

  // Method to make a payment
  makePayment(paymentData: PaymentFormData): Observable<any> {
    return this.http.post('http://localhost:3000/payment', paymentData);
  }

  // Method to set accounts data in the subject
  private setAccountsData(accountsData: any): void {
    this.accountsDataSubject.next(accountsData);
  }

  // Method to set transactions data in the subject
  private setTransactionsData(transactionsData: any): void {
    this.transactionsDataSubject.next(transactionsData);
  }
}
