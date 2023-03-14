import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatUserList, message, wssUserModel } from './userlist';
import { Events, Salas } from './events';
import { timeout } from 'rxjs';
import { UserService } from '@app/services/user/user.service';

@WebSocketGateway({ transports: ['websocket'], cors: '*'})
export class ChatGateway implements OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;
  userList: ChatUserList;

  constructor(
    @Inject('CHAT_SERVICE') private proxyChat: ClientProxy,
    private usuariosSvc: UserService,
  ) {
    this.userList = new ChatUserList(); 
  }

  @SubscribeMessage(Events.CONFIGUSER)
  async configUser(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    let sala = '';
    const users = await this.usuariosSvc.obtener({
      id: data.id,
    });
    const user = users;
    if (user) {
      switch (user.rol) {
        case 'ADMIN':
          sala = this.joinRoom(Salas.ADMIN, client);
          break;
        case 'MEDICO':
          sala = this.joinRoom(Salas.NUTRIOLOGO, client);
          break;
        case 'ESPECIALISTA':
          sala = this.joinRoom(Salas.PACIENTES, client);
          break;
      }

      const userConn = {
        idUser: user.id,
        wsId: client.id,
        sala: sala,
        rol: user.rol,
        username: user.username,
      } as wssUserModel;

      this.userList.add(userConn);
    }
  }

  @SubscribeMessage(Events.ADMIN)
  async sendmessagechatAdmin(@MessageBody() data: message, @ConnectedSocket() client: Socket) {
    this.interCommunication(Salas.ADMIN, Events.ADMIN, data);
  }

  @SubscribeMessage(Events.NUTRIOLOGO)
  async sendmessagechatEspecialistas(@MessageBody() data: message, @ConnectedSocket() client: Socket) {
    this.interCommunication(Salas.NUTRIOLOGO, Events.NUTRIOLOGO, data);
  }

  @SubscribeMessage(Events.PACIENTES)
  async sendmessagechatMedicos(@MessageBody() data: message, @ConnectedSocket() client: Socket) {
    this.interCommunication(Salas.PACIENTES, Events.PACIENTES, data);
  }

  @SubscribeMessage(Events.ADMIN)
  async sendmessagechatEnfermeros(@MessageBody() data: message, @ConnectedSocket() client: Socket) {
    this.interCommunication(Salas.ADMIN, Events.ADMIN, data);
  }

  private interCommunication(sala: string, evento: string, data: message) {
   
    this.proxyChat.connect();
    this.proxyChat.emit({ cmd: 'save-gateway' }, data).pipe(timeout(5000));
    if (data.for === undefined || data.for === null) {
      this.server.in(sala).emit(evento, data);
    } else {
      const user = this.userList.getList().find((u) => u.username === data.for);
      if(user) {
        this.server.in(user.wsId).emit(evento, data);
      }
      
    }
  }

  private joinRoom(sala: string, client: Socket): string {
    client.join(sala);
    return sala;
  }

  handleDisconnect(client: Socket): any {
    this.userList.delete(client.id);
  }
}