import { Module } from "@nestjs/common";
import { PaymentsController } from "./payments/payments.controller";
import { PaymentsService } from "./payments/payments.service";

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
