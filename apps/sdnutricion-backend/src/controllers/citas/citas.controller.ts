import { Controller, Inject, Post, Body} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Controller('citas')
export class CitasController {
    constructor(
        @Inject('CITAS_SERVICE') private clientCitasProxy: ClientProxy
    ) {}

    @Post()
    guardar(@Body() data: any) {
        return this.clientCitasProxy.send({ dates: 'guardar' }, data).pipe(timeout(10000));
    }
}
