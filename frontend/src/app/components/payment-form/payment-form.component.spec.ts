import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular'; 
import { PaymentFormComponent } from './payment-form.component';

describe('PaymentFormComponent', () => {
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentFormComponent],
      imports: [
        ReactiveFormsModule, 
        ClarityModule, 
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate recipient field as required', () => {
    let recipient = component.paymentForm.get('recipient');
    expect(recipient?.valid).toBeFalsy();
  
    recipient?.setValue('John Doe');
    expect(recipient?.valid).toBeTruthy();
  });
  });
