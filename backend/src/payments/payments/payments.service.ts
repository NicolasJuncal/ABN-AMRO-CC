import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { accounts, transactions } from "../../mock-db/mock-data";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class PaymentsService {
  processPayment(
    iban: string,
    amount: number,
    recipient: string,
    ibanRecipient: string,
    description: string

  ) {
    const account = accounts.find((account) => account.iban === iban);
    const recipientAccount = accounts.find(
      (account) => account.iban === ibanRecipient,
    );

    if (!account || !recipientAccount) {
      throw new HttpException("Account not found", HttpStatus.NOT_FOUND);
    }

    if (account.balance < amount) {
      throw new HttpException("Insufficient balance", HttpStatus.BAD_REQUEST);
    }

    account.balance -= amount;
    recipientAccount.balance += amount;

    const transaction = {
      id: uuidv4(),
      iban,
      amount: `$${amount.toFixed(2)}`,
      recipient,
      ibanRecipient,
      description

    };

    transactions.push(transaction);
    return transaction;
  }
}
