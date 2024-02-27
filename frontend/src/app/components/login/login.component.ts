import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NavigationExtras, Router, RouterOutlet } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { CommonBusinessApiService } from "../../services/business-api/common-business-api.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [FormsModule, CommonModule, ClarityModule, HttpClientModule],
  providers: [CommonBusinessApiService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  accounts = [
    { value: "NL5457041782461868", label: "account01" },
    { value: "NL4713092283681073", label: "account02" },
    { value: "NL5422311782461868", label: "account03" },
    { value: "NL5415001782461868", label: "account04" },
  ];

  selectedAccount: string = "";
  ibanUser: string = "";
  password: string = "";
  errorMessage: string = "";

  constructor(private router: Router) {}

  authenticate() {
    if (this.ibanUser !== "" && this.password === "demo") {
      localStorage.setItem("ibanUser", this.ibanUser);
      const navigationExtras: NavigationExtras = {
        state: { ibanUser: this.ibanUser },
      };
      this.router.navigate(["/home"], navigationExtras);
    } else {
      this.errorMessage = "Invalid IBAN or password.\n Password: demo ";
    }
  }
}
