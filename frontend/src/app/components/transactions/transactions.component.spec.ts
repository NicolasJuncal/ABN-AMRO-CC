import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TransactionsComponent } from "./transactions.component";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { AppDataService } from "../../services/data-service/data.service";

describe("TransactionsComponent", () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let mockAppDataService;

  beforeEach(async () => {
    // Mock AppDataService with a subset of methods
    mockAppDataService = jasmine.createSpyObj("AppDataService", [
      "getTransactions",
    ]);
    // Provide the mock service to the TestBed
    await TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      // Add any necessary modules here
      providers: [{ provide: AppDataService, useValue: mockAppDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
    // Mock the observable data
    mockAppDataService.getTransactions.and.returnValue(
      of([
        {
          /* transaction data */
        },
      ])
    );
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should load transactions on init", () => {
    expect(component.transactions.length).toBeGreaterThan(0);
  });

  it("should display transactions in the template", () => {
    const transactionElements = fixture.debugElement.queryAll(
      By.css(".transaction-item")
    );
    expect(transactionElements.length).toEqual(component.transactions.length);
  });

  it("should show a message when no transactions are available", () => {
    component.transactions = [];
    fixture.detectChanges();
    const msgElement = fixture.debugElement.query(
      By.css(".no-transactions-msg")
    );
    expect(msgElement).toBeTruthy();
  });
});
