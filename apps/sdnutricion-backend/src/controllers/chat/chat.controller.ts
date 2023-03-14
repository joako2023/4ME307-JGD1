import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Controller('chat')
export class ChatController {
    constructor(
        @Inject('CHAT_SERVICE') protected clientProxy: ClientProxy
    ) {
        
    }

    @Get(':username')
    async getMyMessages(@Param('username') username: string) {
        this.clientProxy.connect()
        return await this.clientProxy.send({ cmd: 'get-from' }, { username }).pipe(timeout(10000));
    }
}
