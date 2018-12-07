import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

@WebSocketGateway(5200)
export class EventsGateway {

  @WebSocketServer() server;

  @SubscribeMessage('events')
  onEvent(client, data: string): string {
    return data;
  }

  emitMessage(event,data){
    this.server.emit(event,data);
  }

}