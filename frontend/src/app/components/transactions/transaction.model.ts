export interface Transaction {
  id: string;
  iban: string;
  amount: string;
  recipient: string;
  ibanRecipient: string;
}