import { Controller, Get } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
    @Get()
    get():string {
        return 'Testing this api';
    }
}
