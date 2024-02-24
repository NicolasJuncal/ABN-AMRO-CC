import { Injectable } from "@nestjs/common";
import { accounts, transactions } from "../../mock-db/mock-data";

@Injectable()
export class AccountsService {
  findAccountByIban(iban: string) {
    return accounts.find((account) => account.iban === iban);
  }

  findTransactionsByIban(iban: string) {
    return transactions.filter((transaction) => transaction.iban === iban);
  }
}
