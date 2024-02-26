import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsService } from './payments.service';
import { accounts, transactions } from '../../mock-db/mock-data'; // Adjust path as necessary
import { HttpException, HttpStatus } from '@nestjs/common';

describe('PaymentsService', () => {
  let service: PaymentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsService],
    }).compile();

    service = module.get<PaymentsService>(PaymentsService);
  });

  afterEach(() => {
    // Reset the accounts and transactions to their original state if necessary
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should process payment successfully', () => {
    const iban = 'NL5418281782461868'; // Assuming this is a valid sender IBAN in your mock data
    const ibanRecipient = 'NL5418281782461868'; // Assuming this is a valid recipient IBAN in your mock data
    const amount = 100; // Assuming the sender has sufficient balance
    const description = 'Test payment';
  
    const transaction = service.processPayment(iban, amount, 'John Doe', ibanRecipient, description);
  
    expect(transaction).toBeDefined();
    expect(transaction.id).toBeDefined();
    expect(transaction.amount).toEqual(`$${amount.toFixed(2)}`);
  });
  it('should throw HttpException for Account not found', () => {
    expect(() => {
      service.processPayment('senderIban', 10000, 'John Doe', 'recipientIban', 'Payment for services');
    }).toThrow(new HttpException('Account not found', HttpStatus.BAD_REQUEST));

  });
  it('should throw HttpException for account not found', () => {
    expect(() => {
      service.processPayment('NL5418281782461868', 100, 'John Doe', 'invalidRecipientIban', 'Payment for services');
    }).toThrow(new HttpException('Account not found', HttpStatus.NOT_FOUND));
  });
  });
