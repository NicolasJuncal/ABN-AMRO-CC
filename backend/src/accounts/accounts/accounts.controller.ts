import { Controller, Get, Param, Query } from "@nestjs/common";
import { AccountsService } from "./accounts.service";

@Controller("accounts")
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  getAccountByIban(@Query("iban") iban: string) {
    return this.accountsService.findAccountByIban(iban);
  }
  @Get("transactions")
  findTransactions(@Query("iban") iban: string) {
    return this.accountsService.findTransactionsByIban(iban);
  }
}
