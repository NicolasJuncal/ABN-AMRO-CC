import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterOutlet } from "@angular/router";
import { ClarityModule } from "@clr/angular";


@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, ClarityModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
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

  constructor(private router: Router){}
  authenticate() {


    // Mock authentication
    if (this.password === "demo") {
      setTimeout(() => {
        this.router.navigate(['/home']); 
        console.log("Authenticated. Navigating to home...");
      }, 500);
    } else {
      this.errorMessage = "Invalid IBAN or password.";
    }
  }
}
