import { Test, TestingModule } from '@nestjs/testing';
import { AccountsService } from './accounts.service';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountsService],
    }).compile();

    service = module.get<AccountsService>(AccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find an account by IBAN', () => {
    const iban = 'NL5418281782461868';
    const account = service.findAccountByIban(iban);
    expect(account).toBeDefined();
    expect(account.iban).toEqual(iban);
    // Add more assertions as needed to validate the account properties
  });

  it('should find transactions by IBAN', () => {
    const iban = 'NL5418281782461868';
    const transactions = service.findTransactionsByIban(iban);
    expect(transactions).toBeDefined();
    expect(transactions.length).toBeGreaterThan(0);
    // Validate the structure of a transaction object
    expect(transactions[0]).toHaveProperty('id');
    expect(transactions[0]).toHaveProperty('amount');
    // Add more assertions as needed
  });

  // Consider adding tests for cases where the account or transactions are not found
});
