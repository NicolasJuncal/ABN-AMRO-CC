import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { PaymentFormComponent } from "../payment-form/payment-form.component";
import { TransactionsComponent } from "../transactions/transactions.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RouterOutlet,
    ClarityModule,
    PaymentFormComponent,
    TransactionsComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
