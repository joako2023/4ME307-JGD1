import { Controller } from '@nestjs/common';
import { Body, Inject, Post } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/internal/operators/timeout';

@Controller('mails')
export class MailsController {
    constructor(
        @Inject('MAILS_SERVICE') private clientMailsProxy: ClientProxy
    ) {}

    @Post()
    normal(@Body() data: any) {
        return this.clientMailsProxy.emit({ send: 'enviar' }, data).pipe(timeout(10000));
    }
}
