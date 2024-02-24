import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClarityModule } from "@clr/angular";
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClarityModule, PaymentFormComponent, TransactionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interview-assignment';
}
