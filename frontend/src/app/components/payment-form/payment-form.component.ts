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
    const ibanUser = localStorage.getItem("ibanUser");
    if (ibanUser) {
      this.subscriptions.add(
        this.apiService.getAccounts(ibanUser).subscribe(
          (data) => {
            this.paymentForm.get("iban")?.setValue(data.iban);
            this.dataService.setAccountsData(data);
          },
          (error) => {
            throw new Error("Failed to fetch accounts:");
          }
        )
      );
    }
    throw new Error(
      "We are experiencing techinal issues, call us on 02 XXX XXX"
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  onSubmit(): void {
    if (this.paymentForm.valid) {
      this.apiService.makePayment(this.paymentForm.value).subscribe({
        next: (data) => {
          alert(`Payment processed successfully`);
        },
        error: (error) => {
          alert(`Technical ${error}`);
        },
      });
    } else {
      console.log("Form is not valid.");
    }
  }
}
