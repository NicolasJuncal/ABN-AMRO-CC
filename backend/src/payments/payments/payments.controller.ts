import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePaymentDto } from './payments.dto';
import { PaymentsService } from './payments.service';

@Controller('payment')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  createPayment(@Body() paymentDto: CreatePaymentDto) {
    return this.paymentsService.processPayment(
      paymentDto.iban,
      paymentDto.amount,
      paymentDto.recipient,
      paymentDto.ibanRecipient,
    );
  }
}
