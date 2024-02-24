export interface PaymentFormData {
  senderIban: string;
  recipientName: string;
  recipientIban: string;
  amount: number;
  description: string;
}