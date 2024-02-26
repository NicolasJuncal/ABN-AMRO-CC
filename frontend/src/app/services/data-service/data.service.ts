import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '../../components/transactions/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  private accountsDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  accountsData$: Observable<any> = this.accountsDataSubject.asObservable();

  private transactionsDataSubject: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  transactionsData$: Observable<Transaction[]> = this.transactionsDataSubject.asObservable();

  constructor() {}

  setAccountsData(accountsData: any): void {
    this.accountsDataSubject.next(accountsData);
  }

  setTransactionsData(transactionsData: Transaction[]): void {
    this.transactionsDataSubject.next(transactionsData);
  }
}
