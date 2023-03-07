import { Controller } from '@nestjs/common';
import { ControllerBase } from '@app/controller';
import { UserDto } from '@app/dominio/dtos/user.dto';
import { UserService } from '@app/services/user/user.service';

@Controller('user')
export class UserController extends ControllerBase<UserDto> {
  constructor(protected service: UserService) {
    super(service, []);
  }
}
