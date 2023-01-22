import { Module } from '@nestjs/common';
import { UserRegistrationsController } from './user-registrations.controller';
import { UserRegistrationsService } from './user-registrations.service';

@Module({
  imports: [],
  controllers: [UserRegistrationsController],
  providers: [UserRegistrationsService],
})
export class UserRegistrationsModule {}
