import { Test, TestingModule } from '@nestjs/testing';
import { UserRegistrationsController } from './user-registrations.controller';
import { UserRegistrationsService } from './user-registrations.service';

describe('UserRegistrationsController', () => {
  let userRegistrationsController: UserRegistrationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserRegistrationsController],
      providers: [UserRegistrationsService],
    }).compile();

    userRegistrationsController = app.get<UserRegistrationsController>(UserRegistrationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userRegistrationsController.getHello()).toBe('Hello World!');
    });
  });
});
