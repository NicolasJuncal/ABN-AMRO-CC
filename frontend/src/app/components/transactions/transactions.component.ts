import { Component, OnInit, OnDestroy } from '@angular/core';
import { Transaction } from './transaction.model';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { CommonBusinessApiService } from '../../services/business-api/common-business-api.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppDataService } from '../../services/data-service/data.service';

@Component({
  selector: 'app-transactions',
  standalone: true,
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  imports: [CommonModule, ClarityModule, HttpClientModule],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private dataService: AppDataService
  ) {}

  ngOnInit(): void {
    this.subscription = this.dataService.transactionsData$.subscribe((t) => {
      if (t) {
        this.transactions = t;
      }
    });
  }

}
