import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import { timeout } from 'rxjs';

@Controller('pays')
export class PaysController {
    constructor(
        @Inject('PAYS_SERVICE') private paysService: ClientProxy
    ) {}

    @Post('stp/intent')
    intentStripe(@Res() response: Response, @Body() body: any ) {
        return this.paysService.send({ pays: 'stp-intent'}, body).pipe(timeout(10000));
    }
}
