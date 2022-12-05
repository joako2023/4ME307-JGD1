import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/dominio/entities/user.entity';
import { Repository } from 'typeorm';
import { ServiceBase } from '@app/services/base/service.base';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends ServiceBase<User> {
  constructor(@InjectRepository(User) protected repository: Repository<User>) {
    super(repository);
    repository
      .insert([
        {
          id: 1,
          email: 'admin@clikgraphics.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Admin Clik',
          confirmed: true,
          rol: 'ADMIN',
        },
        {
          id: 2,
          email: 'nutriologo@clikgraphics.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 3,
          email: 'paciente@clikgraphics.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Paciente Clik',
          confirmed: true,
          rol: 'PACIENTE',
        },
        {
          id: 4,
          email: 'colaborador@clikgraphics.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Colaborador Clik',
          confirmed: true,
          rol: 'COLABORADOR',
        },
      ])
      .then((resp) => console.log('usuario creado'))
      .catch(() => console.log('usuario existente.'));
  }
}
