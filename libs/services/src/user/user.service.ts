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
          id: 8,
          email: 'nutriologo5@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo5 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 9,
          email: 'nutriologo6@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo6 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 10,
          email: 'nutriologo7@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo7 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id:11,
          email: 'nutriologo8@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo8 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 12,
          email: 'nutriologo9@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo9 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 13,
          email: 'nutriologo10@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo10 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 14,
          email: 'nutriologo11@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo11 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 15,
          email: 'nutriologo12@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo12 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 16,
          email: 'nutriologo13@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo13 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 17,
          email: 'nutriologo14@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo14 Clik',
          confirmed: true,
          rol: 'NUTRIOLOGO',
        },
        {
          id: 18,
          email: 'nutriologo15@sd.com',
          password: bcrypt.hashSync('12345678', 10),
          username: 'Nutriologo15 Clik',
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
