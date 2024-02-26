import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NavigationExtras, Router, RouterOutlet } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { CommonBusinessApiService } from "../../services/business-api/common-business-api.service";
import { HttpClientModule } from "@angular/common/http";
import { forkJoin } from "rxjs/internal/observable/forkJoin";
import { catchError } from "rxjs";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule, 
    ClarityModule, 
    HttpClientModule ],
  providers: [CommonBusinessApiService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"], // Corrected from 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  accounts = [
    { value: "NL5457041782461868", label: "account01", balance: 85799 },
    { value: "NL4713092283681073", label: "account02", balance: 73677 },
    { value: "NL5422311782461868", label: "account03", balance: 71750 },
    { value: "NL5415001782461868", label: "account04", balance: 60746 },
  ];

  selectedAccount: string = "";
  ibanUser: string = "";
  password: string = "";
  errorMessage: string = "";


  constructor(private router: Router, private commonBusinessApiService: CommonBusinessApiService) {}

  authenticate() {
    if (this.password === 'demo') {
      forkJoin({
        accounts: this.commonBusinessApiService.getAccounts(this.ibanUser),
        transactions: this.commonBusinessApiService.getTransactions(this.ibanUser),
      })
      .pipe(
        catchError(error => {
          console.error('Error fetching data:', error);
          this.errorMessage = 'Failed to fetch account or transaction data.';
          throw error;
        })
      )
      .subscribe(({ accounts, transactions }) => {
        console.log(JSON.stringify({accounts, transactions}))
        localStorage.setItem('ibanUser', this.ibanUser);
        const navigationExtras: NavigationExtras = {
          state: { ibanUser: this.ibanUser },
        };
        this.router.navigate(['/home'], navigationExtras);
      });
    } else {
      this.errorMessage = 'Invalid IBAN or password.';
    }
  }
}