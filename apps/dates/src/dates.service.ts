import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { dates } from './entities/dates.entity';

@Injectable()
export class DatesService {
  constructor(
    @InjectRepository(dates) private repo: Repository<dates>
  ){}

  async save(data: dates) {
    // validar que el paciente tiene una sola cita agendada
    // validar que la ultima cita este terminada
    return await this.repo.save(data);
  }
}
