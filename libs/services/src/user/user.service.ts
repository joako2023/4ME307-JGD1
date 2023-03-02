import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@app/dominio/entities/user.entity';
import { Repository } from 'typeorm';
import { ServiceBase } from '@app/services/base/service.base';
import * as bcrypt from 'bcrypt';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class UserService extends ServiceBase<User> {
  constructor(@InjectRepository(User) protected repository: Repository<User>) {
    super(repository);
    repository
      .insert([
        {
          id: 1,
          email: 'admin@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Admin Clik',
          confirmed: true,
          rol: 'ADMIN',
        },
        {
          id: 2,
          email: 'nutriologo@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 3,
          email: 'paciente@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Paciente Clik',
          confirmed: true,
          rol: 'PACIENTE',
        },
        {
          id: 4,
          email: 'colaborador@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Colaborador Clik',
          confirmed: true,
          rol: 'COLABORADOR',
        },
        {
          id: 5,
          email: 'nutriologo2@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo2 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 6,
          email: 'nutriologo3@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo3 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 7,
          email: 'nutriologo4@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo4 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
      ])
      .then((resp) => console.log('usuario creado'))
      .catch(() => console.log('usuario existente.'));
  }

  async guardar(data: User) {
    if(data.password) {
      data.password = bcrypt.hashSync(data.password, 10)
    }
    return await this.repository.save(data);
  }

  async actualizar(
    id: number | string,
    data: QueryDeepPartialEntity<User>,
  ): Promise<any> {
    return await this.repository.update(id, data);
  }
}
