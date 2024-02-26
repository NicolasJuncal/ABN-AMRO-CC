import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ClarityModule } from "@clr/angular";
import { CommonBusinessApiService } from "../../services/business-api/common-business-api.service";
import { HttpClientModule } from "@angular/common/http";
import { AppDataService } from "../../services/data-service/data.service";
import { Subscription } from "rxjs";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-payment-form",
  standalone: true,
  imports: [ClarityModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  providers: [CommonBusinessApiService],
  templateUrl: "./payment-form.component.html",
  styleUrls: ["./payment-form.component.scss"],
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  private subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private apiService: CommonBusinessApiService,
    private dataService: AppDataService
  ) {
    this.paymentForm = this.fb.group({
      iban: [{ value: "" }, [Validators.required]],
      recipient: ["", [Validators.required, Validators.maxLength(20)]],
      ibanRecipient: ["", [Validators.required, Validators.maxLength(20)]],
      amount: [null, [Validators.required, Validators.max(10000)]],
      description: ["", [Validators.maxLength(50)]],
    });
  }
  ngOnInit(): void {
    this.subscriptions.add(
      this.dataService.accountsData$.subscribe((accountsData) => {
        if (accountsData && accountsData.iban) {
          this.paymentForm.get("iban")?.setValue(accountsData.iban);
        } else {
          // Assuming 'ibanUser' is stored correctly and is the IBAN you need
          const ibanUser = localStorage.getItem("ibanUser");
          if (ibanUser) {
            this.subscriptions.add(
              this.apiService.getAccounts(ibanUser).subscribe(
                (data) => {
                  this.paymentForm.get("iban")?.setValue(data.iban);
                  // Optionally, update your dataService with the new accounts data
                  this.dataService.setAccountsData(data);
                },
                (error) => {
                  console.error("Failed to fetch accounts:", error);
                  // Handle the error, e.g., show an error message
                }
              )
            );
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  onSubmit(): void {
    if (this.paymentForm.valid) {
      this.apiService.makePayment(this.paymentForm.value).subscribe({
        next: (data) => {
          alert("nice man");
          console.log(data);
        },
        error: (error) => console.error("Failed to :", error),
      });
    } else {
      console.log("Form is not valid.");
    }
  }
}
