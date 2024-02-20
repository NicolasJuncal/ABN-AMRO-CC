import { Controller, Get, Post } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
    @Post()
    create():string {
        return 'Testing the Payments api';
    }
}
