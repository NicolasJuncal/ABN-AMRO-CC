import { Component, OnInit, OnDestroy } from "@angular/core";
import { Transaction } from "./transaction.model";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "@clr/angular";
import { CommonBusinessApiService } from "../../services/business-api/common-business-api.service";
import { HttpClientModule } from "@angular/common/http";
import { Subscription, forkJoin } from "rxjs";
import { AppDataService } from "../../services/data-service/data.service";

@Component({
  selector: "app-transactions",
  standalone: true,
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.css"],
  imports: [CommonModule, ClarityModule, HttpClientModule],
  providers: [CommonBusinessApiService],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private commonBusinessApiService: CommonBusinessApiService
  ) {}

  ngOnInit(): void {
    const ibanUser = localStorage.getItem("ibanUser");
    forkJoin({
      transactions: this.commonBusinessApiService.getTransactions(
        ibanUser as string
      ),
    }).subscribe(({ transactions }) => {
      this.transactions = transactions;
    });
  }
}
