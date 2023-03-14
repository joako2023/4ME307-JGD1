import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {

  constructor(
    @InjectRepository(Chat) private repository: Repository<Chat>
  ) { }

  save(data: Chat) {
    return this.repository.save(data);
  }

  getMyMessages(username: string) {
    return this.repository.find({
      where: [{
        from: username
      }, {
        for: username
      }],
      order: {
        send_at: 'ASC'
      }
    })
  }

  getAll() {
   return this.repository.find();
  }
}
