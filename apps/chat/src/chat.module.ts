import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { CONN_MYSQL } from './constants';
import { Chat } from './entities/chat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(CONN_MYSQL),
    TypeOrmModule.forFeature([
      Chat
    ])
  ],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
