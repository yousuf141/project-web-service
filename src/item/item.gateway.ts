import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

let fanValue = false;
let lightValue = false;

@WebSocketGateway({ cors: true })
export class ItemGateway {
  @SubscribeMessage('updateItem')
  handleItemUpdate(
    @ConnectedSocket() client: Socket,
    @MessageBody('item') item: string,
    @MessageBody('value') value: boolean,
  ) {
    switch (item) {
      case 'fan': {
        fanValue = value;
        client.broadcast.emit('itemUpdated', { item, value });
        break;
      }
      case 'light': {
        lightValue = value;
        client.broadcast.emit('itemUpdated', { item, value });
        break;
      }
    }
  }

  @SubscribeMessage('readItem')
  handleItemRead(@ConnectedSocket() client: Socket) {
    client.emit('updateItem', { item: 'fan', value: fanValue });
    client.emit('updateItem', { item: 'light', value: lightValue });
  }
}
