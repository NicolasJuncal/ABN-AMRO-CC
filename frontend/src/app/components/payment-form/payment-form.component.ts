import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [ClarityModule, ReactiveFormsModule], // Import ReactiveFormsModule here
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      senderIban: ['', [Validators.required]],
      recipientName: ['', [Validators.required, Validators.maxLength(20)]],
      recipientIban: ['', [Validators.required, Validators.maxLength(20)]],
      amount: [null, [Validators.required, Validators.max(10000)]],
      description: ['', [Validators.maxLength(50)]]
    });
  }
  onSubmit(): void {
    if (this.paymentForm.valid) {
      console.log('Form Submission', this.paymentForm.value);
      // Here, you would typically handle the form submission, e.g., sending data to an API
    } else {
      console.log('Form is not valid.');
    }
  }
}
