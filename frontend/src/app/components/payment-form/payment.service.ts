// payment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaymentFormData } from './payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  processPayment(paymentData: PaymentFormData): Observable<any> {
    return this.http.post('/api/payment', paymentData);
  }
}
