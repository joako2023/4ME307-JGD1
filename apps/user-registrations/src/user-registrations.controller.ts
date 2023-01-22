import { Controller, Get } from '@nestjs/common';
import { UserRegistrationsService } from './user-registrations.service';

@Controller()
export class UserRegistrationsController {
  constructor(private readonly userRegistrationsService: UserRegistrationsService) {}

  @Get()
  getHello(): string {
    return this.userRegistrationsService.getHello();
  }
}
