import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { ChatService } from './chat.service';
import { Chat } from './entities/chat.entity';

@Controller()
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @MessagePattern({ cmd: 'save' })
  async save(data: Chat) {
    return await this.chatService.save(data);
  }

  @EventPattern({ cmd: 'save-gateway' })
  async saveGateway(data: Chat) {
    return await this.chatService.save(data);
  }

  @MessagePattern({ cmd: 'get-from' })
  async getMessagges(data: any) {
    return await this.chatService.getMyMessages(data.username);
  }

  @MessagePattern({ cmd: 'get' })
  async getAllMessagges() {
    return await this.chatService.getAll();
  }
}
